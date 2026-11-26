// ============================================================
// KONFIGURASI & HELPER API (MockAPI)
// Service terpusat untuk panggilan ke MockAPI.
// Base URL diambil dari VITE_API_URL (.env).
// ============================================================

export const API_URL = import.meta.env.VITE_API_URL;

// GET semua user
export async function getUsers() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Gagal mengambil data dari MockAPI.");
  return res.json();
}

// GET user by id
export async function getUserById(id) {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw new Error("Gagal mengambil data user.");
  return res.json();
}

// POST user baru (registrasi)
export async function createUser({ name, email, pasword, daftarsaya = "[]" }) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, pasword, daftarsaya, avatar: "" }),
  });
  if (!res.ok) throw new Error("Gagal mendaftarkan akun.");
  return res.json();
}

// PUT update user (misal untuk update daftarsaya)
export async function updateUser(id, perubahan) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(perubahan),
  });
  if (!res.ok) throw new Error("Gagal memperbarui data.");
  return res.json();
}

// DELETE user
export async function deleteUser(id) {
  const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Gagal menghapus data.");
  return res.json();
}

// Alias agar impor bernama getData tetap resolve ke getUsers
export const getData = getUsers;
