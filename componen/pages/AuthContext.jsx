import { createContext, useContext, useEffect, useState } from "react";
import { getUsers, createUser, updateUser } from "./mockapi.js";

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
  const bacaDaftar = () => {
    try {
      return JSON.parse(user?.daftarsaya || "[]");
    } catch {
      return [];
    }
  };

  const tambahKeDaftar = async (film) => {
    if (!user) throw new Error("Harus login dulu.");
    const list = bacaDaftar();
    if (list.some((f) => f.id === film.id)) return;
    const baru = [...list, film];
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
