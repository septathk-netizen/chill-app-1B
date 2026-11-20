// ============================================================
// KONFIGURASI & HELPER MOCKAPI
// Base URL proyek chillapp kamu di mockapi.io
// ============================================================
export const API_URL = "https://6b0034d17fc363ccff09ec97.mockapi.io/chillapp";

// GET semua user
export async function getUsers() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Gagal mengambil data dari MockAPI.");
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
