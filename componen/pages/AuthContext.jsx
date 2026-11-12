import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

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

  const register = ({ nama, email, password }) => {
    const users = getUsers();
    if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
      throw new Error("Email sudah terdaftar, silakan masuk.");
    }
    const newUser = { id: Date.now(), nama, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    setUser({ id: newUser.id, nama, email });
  };

  const login = ({ email, password }) => {
    const users = getUsers();
    const found = users.find(
      (u) =>
        u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    if (!found) throw new Error("Email atau password salah.");
    setUser({ id: found.id, nama: found.nama, email: found.email });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
