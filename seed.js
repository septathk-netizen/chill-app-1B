// ============================================================
// SEED SCRIPT — Jalankan sekali untuk isi MockAPI awal
// Jalankan: node seed.js
// ============================================================

const API_URL = "https://6b0034d17fc363ccff09ec97.mockapi.io/chillapp";

const heroFilm = {
  type: "hero",
  page: "film",
  img: "https://picsum.photos/seed/hero-film/1920/800",
  title: "AVATAR 3",
  description: "melanjutkan cerita konflik antara manusia dan Na'vi di planet Pandora. Dalam pertempuran untuk sumber daya dan kekuasaan, manusia dan sekutu Na'vi bersatu untuk melindungi tanah mereka. Film ini mengangkat tema persatuan dan perlawanan terhadap eksploitasi."
};

const heroSeries = {
  type: "hero",
  page: "series",
  img: "https://picsum.photos/seed/hero-series/1920/800",
  title: "Happiness",
  description: "Mengisahkan tentang kelompok orang yang berjuang untuk bertahan hidup di dalam sebuah gedung apartemen yang penuh dengan zombie. Sayangnya, virus zombie hanya terdapat di dalam area apartemen tersebut dan tidak menyebar ke luar kawasan apartemen."
};

const sections = [
  // SERIES
  { type: "series", kategori: "Melanjutkan Tonton Series", items: [{ img: "https://picsum.photos/seed/s1/300/450" }, { img: "https://picsum.photos/seed/s2/300/450" }, { img: "https://picsum.photos/seed/s3/300/450" }, { img: "https://picsum.photos/seed/s4/300/450" }] },
  { type: "series", kategori: "Series Persembahan Chill", items: [{ img: "https://picsum.photos/seed/s5/300/450" }, { img: "https://picsum.photos/seed/s6/300/450" }, { img: "https://picsum.photos/seed/s7/300/450" }, { img: "https://picsum.photos/seed/s8/300/450" }, { img: "https://picsum.photos/seed/s9/300/450" }] },
  { type: "series", kategori: "Top Rating Series Hari ini", items: [{ img: "https://picsum.photos/seed/s10/300/450" }, { img: "https://picsum.photos/seed/s11/300/450" }, { img: "https://picsum.photos/seed/s12/300/450" }, { img: "https://picsum.photos/seed/s13/300/450" }, { img: "https://picsum.photos/seed/s14/300/450" }] },
  { type: "series", kategori: "Series Trending", items: [{ img: "https://picsum.photos/seed/s15/300/450" }, { img: "https://picsum.photos/seed/s16/300/450" }, { img: "https://picsum.photos/seed/s17/300/450" }, { img: "https://picsum.photos/seed/s18/300/450" }, { img: "https://picsum.photos/seed/s19/300/450" }] },
  { type: "series", kategori: "Rilis Baru", items: [{ img: "https://picsum.photos/seed/s20/300/450" }, { img: "https://picsum.photos/seed/s21/300/450" }, { img: "https://picsum.photos/seed/s22/300/450" }, { img: "https://picsum.photos/seed/s23/300/450" }, { img: "https://picsum.photos/seed/s24/300/450" }] },
  // FILM
  { type: "film", kategori: "Melanjutkan Tonton Series", items: [{ img: "https://picsum.photos/seed/f1/300/450" }, { img: "https://picsum.photos/seed/f2/300/450" }, { img: "https://picsum.photos/seed/f3/300/450" }, { img: "https://picsum.photos/seed/f4/300/450" }] },
  { type: "film", kategori: "Film Persembahan Chill", items: [{ img: "https://picsum.photos/seed/f5/300/450" }, { img: "https://picsum.photos/seed/f6/300/450" }, { img: "https://picsum.photos/seed/f7/300/450" }, { img: "https://picsum.photos/seed/f8/300/450" }, { img: "https://picsum.photos/seed/f9/300/450" }] },
  { type: "film", kategori: "Top Rating Film Hari ini", items: [{ img: "https://picsum.photos/seed/f10/300/450" }, { img: "https://picsum.photos/seed/f11/300/450" }, { img: "https://picsum.photos/seed/f12/300/450" }, { img: "https://picsum.photos/seed/f13/300/450" }, { img: "https://picsum.photos/seed/f14/300/450" }] },
  { type: "film", kategori: "Film Tranding", items: [{ img: "https://picsum.photos/seed/f15/300/450" }, { img: "https://picsum.photos/seed/f16/300/450" }, { img: "https://picsum.photos/seed/f17/300/450" }, { img: "https://picsum.photos/seed/f18/300/450" }, { img: "https://picsum.photos/seed/f19/300/450" }] },
  { type: "film", kategori: "Rilis Baru", items: [{ img: "https://picsum.photos/seed/f20/300/450" }, { img: "https://picsum.photos/seed/f21/300/450" }, { img: "https://picsum.photos/seed/f22/300/450" }, { img: "https://picsum.photos/seed/f23/300/450" }, { img: "https://picsum.photos/seed/f24/300/450" }] },
];

const payloads = [heroFilm, heroSeries, ...sections];

async function seed() {
  for (const p of payloads) {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(p),
      });
      if (!res.ok) throw new Error(await res.text());
      const data = await res.json();
      console.log("✅ Created:", data.type, data.kategori || data.page, "id:", data.id);
    } catch (e) {
      console.error("❌ Gagal:", p.kategori || p.page, e.message);
    }
  }
  console.log("🎉 Seed selesai!");
}

seed();