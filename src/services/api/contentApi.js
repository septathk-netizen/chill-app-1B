// ============================================================
// CONTENT API SERVICE (MockAPI)
// CRUD untuk Film & Series konten
// ============================================================

export const CONTENT_API_URL = import.meta.env.VITE_API_URL;

// GET all content
export async function getContent() {
  const res = await fetch(CONTENT_API_URL);
  if (!res.ok) throw new Error("Gagal mengambil data konten.");
  return res.json();
}

// GET content by id
export async function getContentById(id) {
  const res = await fetch(`${CONTENT_API_URL}/${id}`);
  if (!res.ok) throw new Error("Gagal mengambil detail konten.");
  return res.json();
}

// POST new content (film/series)
export async function createContent(data) {
  const res = await fetch(CONTENT_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Gagal menambah konten.");
  return res.json();
}

// PUT update content
export async function updateContent(id, data) {
  const res = await fetch(`${CONTENT_API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Gagal memperbarui konten.");
  return res.json();
}

// DELETE content
export async function deleteContent(id) {
  const res = await fetch(`${CONTENT_API_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Gagal menghapus konten.");
  return res.json();
}