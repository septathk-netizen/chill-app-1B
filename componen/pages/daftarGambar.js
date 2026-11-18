// ============================================================
// DAFTAR SEMUA GAMBAR
// Mau upload gambar baru? Taruh filenya di folder src/assets,
// lalu tambahkan 2 baris di bawah ini:
//   1. import NamaGambar from "../../src/assets/namafile.png";
//   2. masukkan ke objek gambar: { nama: "NamaGambar", img: NamaGambar },
// Setelah itu gambarnya otomatis muncul di dropdown Super Admin.
// ============================================================

import Rectangle9a from "../../src/assets/Rectangle 9 (1).png";
import Rectangle9b from "../../src/assets/Rectangle 9 (2).png";
import Frame66 from "../../src/assets/Frame 66.png";
import Frame66a from "../../src/assets/Frame 66 (1).png";
import Frame66b from "../../src/assets/Frame 66 (2).png";
import Frame66c from "../../src/assets/Frame 66 (3).png";
import Frame67 from "../../src/assets/Frame 67.png";
import Frame68 from "../../src/assets/Frame 68.png";
import Frame68a from "../../src/assets/Frame 68 (1).png";
import Frame74 from "../../src/assets/Frame 74.png";
import Frame74a from "../../src/assets/Frame 74 (2).png";
import Frame74b from "../../src/assets/Frame 74 (3).png";
import Frame75 from "../../src/assets/Frame 75.png";
import Frame76 from "../../src/assets/Frame 76.png";
import Frame76a from "../../src/assets/Frame 76 (1).png";
import Frame76b from "../../src/assets/Frame 76 (2).png";
import Frame76c from "../../src/assets/Frame 76 (5).png";
import Frame77 from "../../src/assets/Frame 77.png";
import Frame77a from "../../src/assets/Frame 77 (1).png";
import Frame77b from "../../src/assets/Frame 77 (2).png";
import Frame78 from "../../src/assets/Frame 78.png";
import Frame78a from "../../src/assets/Frame 78 (2).png";
import Frame79 from "../../src/assets/Frame 79.png";
import Component1 from "../../src/assets/Component 1 (1).png";
import Component1b from "../../src/assets/Component 1 (5).png";
import Component1c from "../../src/assets/Component 1 (6).png";
import Component2a from "../../src/assets/Component 2 (2).png";

// ---------- INI DAFTAR YANG MUNCUL DI SUPER ADMIN ----------
// format: { nama: "nama tampilan di dropdown", img: variabel import }
export const daftarGambar = [
  { nama: "Rectangle 9 (1)", img: Rectangle9a },
  { nama: "Rectangle 9 (2)", img: Rectangle9b },
  { nama: "Frame 66", img: Frame66 },
  { nama: "Frame 66 (1)", img: Frame66a },
  { nama: "Frame 66 (2)", img: Frame66b },
  { nama: "Frame 66 (3)", img: Frame66c },
  { nama: "Frame 67", img: Frame67 },
  { nama: "Frame 68", img: Frame68 },
  { nama: "Frame 68 (1)", img: Frame68a },
  { nama: "Frame 74", img: Frame74 },
  { nama: "Frame 74 (2)", img: Frame74a },
  { nama: "Frame 74 (3)", img: Frame74b },
  { nama: "Frame 75", img: Frame75 },
  { nama: "Frame 76", img: Frame76 },
  { nama: "Frame 76 (1)", img: Frame76a },
  { nama: "Frame 76 (2)", img: Frame76b },
  { nama: "Frame 76 (5)", img: Frame76c },
  { nama: "Frame 77", img: Frame77 },
  { nama: "Frame 77 (1)", img: Frame77a },
  { nama: "Frame 77 (2)", img: Frame77b },
  { nama: "Frame 78", img: Frame78 },
  { nama: "Frame 78 (2)", img: Frame78a },
  { nama: "Frame 79", img: Frame79 },
  { nama: "Component 1 (1)", img: Component1 },
  { nama: "Component 1 (5)", img: Component1b },
  { nama: "Component 1 (6)", img: Component1c },
  { nama: "Component 2 (2)", img: Component2a },
];

// helper: cari gambar berdasarkan URL-nya (dipakai dataFilm & SuperAdmin)
export const cariGambar = (url) =>
  daftarGambar.find((g) => g.img === url) || daftarGambar[0];
