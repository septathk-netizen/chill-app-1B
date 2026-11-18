// ============================================================
// FILE DATA TERPUSAT
// Semua konten Hero dan LayoutFilm ada di file ini.
// Mau ganti konten? Edit di sini saja — tidak perlu ubah halaman.
// ============================================================

// ---------- HALAMAN SERIES ----------
import LatarBlakang from "../../src/assets/Rectangle 9 (1).png";
import Series1 from "../../src/assets/Frame 66 (1).png";
import Series2 from "../../src/assets/Frame 66 (2).png";
import Series3 from "../../src/assets/Component 2 (2).png";
import Series4 from "../../src/assets/Frame 68 (1).png";
import Persembahan1 from "../../src/assets/Frame 74 (3).png";
import Persembahan2 from "../../src/assets/Frame 78 (2).png";
import Persembahan3 from "../../src/assets/Frame 76 (2).png";
import Persembahan4 from "../../src/assets/Frame 79.png";
import Persembahan5 from "../../src/assets/Component 1 (5).png";
import Top1 from "../../src/assets/Frame 74 (2).png";
import Top2 from "../../src/assets/Frame 78.png";
import Top3 from "../../src/assets/Frame 76 (5).png";
import Top4 from "../../src/assets/Frame 78 (2).png";
import Top5 from "../../src/assets/Frame 77.png";
import Trending1 from "../../src/assets/Frame 74.png";
import Trending2 from "../../src/assets/Frame 77.png";
import Trending3 from "../../src/assets/Frame 76 (1).png";
import Trending4 from "../../src/assets/Frame 77 (1).png";
import Trending5 from "../../src/assets/Frame 78 (2).png";

export const dataSeries = {
  hero: {
    img: LatarBlakang,
    title: "Happiness",
    description:
      "Mengisahkan tentang kelompok orang yang berjuang untuk bertahan hidup di dalam sebuah gedung apartemen yang penuh dengan zombie. Sayangnya, virus zombie hanya terdapat di dalam area apartemen tersebut dan tidak menyebar ke luar kawasan apartemen.",
  },
  sections: [
    {
      kategori: "Melanjutkan Tonton Series",
      items: [
        { img: Series1 },
        { img: Series2 },
        { img: Series3 },
        { img: Series4 },
      ],
    },
    {
      kategori: "Series Persembahan Chill",
      items: [
        { img: Persembahan1 },
        { img: Persembahan2 },
        { img: Persembahan3 },
        { img: Persembahan4 },
        { img: Persembahan5 },
      ],
    },
    {
      kategori: "Top Rating Series Hari ini",
      items: [
        { img: Top1 },
        { img: Top2 },
        { img: Top3 },
        { img: Top4 },
        { img: Top5 },
      ],
    },
    {
      kategori: "Series Trending",
      items: [
        { img: Trending1 },
        { img: Trending2 },
        { img: Trending3 },
        { img: Trending4 },
        { img: Trending5 },
      ],
    },
    {
      kategori: "Rilis Baru",
      items: [
        { img: Persembahan1 },
        { img: Persembahan2 },
        { img: Persembahan3 },
        { img: Persembahan4 },
        { img: Persembahan5 },
      ],
    },
  ],
};

// ---------- HALAMAN FILM ----------
import LatarBlakang1 from "../../src/assets/Rectangle 9 (2).png";
import FilmSeries1 from "../../src/assets/Frame 66.png";
import FilmSeries2 from "../../src/assets/Frame 66 (3).png";
import FilmSeries3 from "../../src/assets/Frame 67.png";
import FilmSeries4 from "../../src/assets/Frame 68.png";
import Chil1 from "../../src/assets/Frame 74 (3).png";
import Chil2 from "../../src/assets/Frame 78 (2).png";
import Chil3 from "../../src/assets/Frame 76 (2).png";
import Chil4 from "../../src/assets/Frame 79.png";
import Chil5 from "../../src/assets/Frame 77 (2).png";
import FilmTop1 from "../../src/assets/Component 1 (6).png";
import FilmTop2 from "../../src/assets/Frame 78.png";
import FilmTop3 from "../../src/assets/Frame 76.png";
import FilmTop4 from "../../src/assets/Frame 77 (2).png";
import Tranding1 from "../../src/assets/Frame 74.png";
import Tranding2 from "../../src/assets/Component 1 (1).png";
import Tranding3 from "../../src/assets/Frame 76 (1).png";
import Tranding4 from "../../src/assets/Frame 77 (1).png";

export const dataFilm = {
  hero: {
    img: LatarBlakang1,
    title: "AVATAR 3",
    description:
      "melanjutkan cerita konflik antara manusia dan Na'vi di planet Pandora. Dalam pertempuran untuk sumber daya dan kekuasaan, manusia dan sekutu Na'vi bersatu untuk melindungi tanah mereka. Film ini mengangkat tema persatuan dan perlawanan terhadap eksploitasi.",
  },
  sections: [
    {
      kategori: "Melanjutkan Tonton Series",
      items: [
        { img: FilmSeries1 },
        { img: FilmSeries2 },
        { img: FilmSeries3 },
        { img: FilmSeries4 },
      ],
    },
    {
      kategori: "Film Persembahan Chill",
      items: [
        { img: Chil1 },
        { img: Chil2 },
        { img: Chil3 },
        { img: Chil4 },
        { img: Chil5 },
      ],
    },
    {
      kategori: "Top Rating Film Hari ini",
      items: [
        { img: FilmTop1 },
        { img: FilmTop2 },
        { img: FilmTop3 },
        { img: FilmTop4 },
        { img: Chil3 },
      ],
    },
    {
      kategori: "Film Tranding",
      items: [
        { img: Tranding1 },
        { img: Tranding2 },
        { img: Tranding3 },
        { img: Tranding4 },
        { img: Chil1 },
      ],
    },
    {
      kategori: "Rilis Baru",
      items: [
        { img: Chil1 },
        { img: Chil2 },
        { img: Chil3 },
        { img: Chil4 },
        { img: Chil5 },
      ],
    },
  ],
};
