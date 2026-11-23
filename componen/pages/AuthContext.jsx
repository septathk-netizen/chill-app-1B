import { createContext, useContext, useEffect, useState } from "react";
import { getUsers, createUser, updateUser, getUserById } from "../../src/services/api/mockapi.js";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("currentUser")) || null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [user]);

  // ---------------- REGISTRASI (POST ke MockAPI) ----------------
  const register = async ({ nama, email, password }) => {
    const users = await getUsers();
    if (
      users.some((u) => (u.email || "").toLowerCase() === email.toLowerCase())
    ) {
      throw new Error("Email sudah terdaftar, silakan masuk.");
    }
    const newUser = await createUser({
      name: nama,
      email,
      pasword: password,
      daftarsaya: "[]",
    });
    setUser({ id: newUser.id, nama: newUser.name, email: newUser.email });
  };

  // ---------------- LOGIN (GET dari MockAPI) ----------------
  const login = async ({ email, password }) => {
    const users = await getUsers();
    const found = users.find(
      (u) =>
        (u.email || "").toLowerCase() === email.toLowerCase() &&
        u.pasword === password,
    );
    if (!found) throw new Error("Email atau password salah.");
    setUser({
      id: found.id,
      nama: found.name,
      email: found.email,
      daftarsaya: found.daftarsaya || "[]",
    });
  };

  const logout = () => setUser(null);

  // ---- Daftar Saya (film favorit, disimpan di field daftarsaya MockAPI) ----
  const bacaDaftar = (u = user) => {
    try {
      return JSON.parse(u?.daftarsaya || "[]");
    } catch {
      return [];
    }
  };

  // ambil ulang daftar terbaru dari MockAPI (dipanggil sebelum tambah)
  const refreshDaftarSaya = async () => {
    if (!user) return;
    try {
      const fresh = await getUserById(user.id);
      setUser((prev) => ({ ...prev, daftarsaya: fresh.daftarsaya || "[]" }));
    } catch {
      // diamkan, pakai data lama
    }
  };

  const tambahKeDaftar = async (film) => {
    if (!user) throw new Error("Harus login dulu.");
    const list = bacaDaftar();
    const item = { id: film.id, img: film.img, title: film.title };
    if (list.some((f) => f.id === item.id)) return; // sudah ada, cukup diabaikan
    const baru = [...list, item];
    const updated = await updateUser(user.id, {
      daftarsaya: JSON.stringify(baru),
    });
    setUser({ ...user, daftarsaya: updated.daftarsaya });
  };

  const hapusDariDaftar = async (id) => {
    if (!user) throw new Error("Harus login dulu.");
    const baru = bacaDaftar().filter((f) => f.id !== id);
    const updated = await updateUser(user.id, {
      daftarsaya: JSON.stringify(baru),
    });
    setUser({ ...user, daftarsaya: updated.daftarsaya });
  };

  const daftarSaya = bacaDaftar();

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        login,
        logout,
        daftarSaya,
        refreshDaftarSaya,
        tambahKeDaftar,
        hapusDariDaftar,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
