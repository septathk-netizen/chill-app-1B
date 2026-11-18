import { createContext, useContext, useEffect, useState } from "react";

// ============================================================
// IMPORT GAMBAR ASLI (menggantikan string nama file)
// ============================================================
import Rectangle9a from "../../src/assets/Rectangle 9 (1).png";
import Rectangle9b from "../../src/assets/Rectangle 9 (2).png";
import Series1 from "../../src/assets/Frame 66 (1).png";
import Series2 from "../../src/assets/Frame 66 (2).png";
import Series3 from "../../src/assets/Component 2 (2).png";
import Series4 from "../../src/assets/Frame 68 (1).png";
import Persembahan1 from "../../src/assets/Frame 74 (3).png";
import Persembahan2 from "../../src/assets/Frame 78 (2).png";
import Persembahan3 from "../../src/assets/Frame 76 (2).png";
import Persembahan4 from "../../src/assets/Frame 79.png";
import Persembahan5 from "../../src/assets/Component 1 (5).png";

// ============================================================
// DATA AWAL (array of object)
// ============================================================
const dataAwal = {
  // data untuk komponen Hero
  hero: [
    {
      id: 1,
      img: Rectangle9a,
      title: "Happiness",
      description:
        "Mengisahkan tentang kelompok orang yang berjuang untuk bertahan hidup di dalam sebuah gedung apartemen yang penuh dengan zombie.",
    },
    {
      id: 2,
      img: Rectangle9b,
      title: "AVATAR 3",
      description:
        "melanjutkan cerita konflik antara manusia dan Na'vi di planet Pandora.",
    },
  ],

  // data untuk komponen LayoutFilm (dikelompokkan per bagian)
  film: [
    {
      id: 1,
      kategori: "Melanjutkan Tonton Series",
      items: [
        { id: 101, img: Series1, title: "Series 1" },
        { id: 102, img: Series2, title: "Series 2" },
        { id: 103, img: Series3, title: "Series 3" },
        { id: 104, img: Series4, title: "Series 4" },
      ],
    },
    {
      id: 2,
      kategori: "Series Persembahan Chill",
      items: [
        { id: 201, img: Persembahan1, title: "Persembahan 1" },
        { id: 202, img: Persembahan2, title: "Persembahan 2" },
        { id: 203, img: Persembahan3, title: "Persembahan 3" },
        { id: 204, img: Persembahan4, title: "Persembahan 4" },
        { id: 205, img: Persembahan5, title: "Persembahan 5" },
      ],
    },
  ],
};

// ============================================================
// CONTEXT
// ============================================================
const DataContext = createContext(null);

export function DataProvider({ children }) {
  const [data, setData] = useState(() => {
    try {
      const simpan = JSON.parse(localStorage.getItem("dataFilm"));
      // abaikan data lama yang img-nya masih string nama file
      if (simpan && Array.isArray(simpan.hero) && simpan.hero[0]?.img) {
        if (typeof simpan.hero[0].img === "string" && !simpan.hero[0].img.startsWith("data:") && !simpan.hero[0].img.startsWith("/") && !simpan.hero[0].img.startsWith("http")) {
          return dataAwal;
        }
        return simpan;
      }
      return dataAwal;
    } catch {
      return dataAwal;
    }
  });

  useEffect(() => {
    localStorage.setItem("dataFilm", JSON.stringify(data));
  }, [data]);

  // ---------------- AMBIL DATA ----------------
  const getData = (tipe) => data[tipe] || [];

  // ---------------- TAMBAH DATA ----------------
  // tipe: "hero" | "film"
  // dataBaru: objek baru, misal { title, description, img }
  // untuk tipe "film" bisa kirim { kategori, items }
  const tambahData = (tipe, dataBaru) => {
    setData((prev) => ({
      ...prev,
      [tipe]: [...prev[tipe], { id: Date.now(), ...dataBaru }],
    }));
  };

  // ---------------- UBAH DATA ----------------
  // tipe: "hero" | "film"
  // id: id objek yang mau diubah
  // perubahan: objek berisi field yang diganti
  const ubahData = (tipe, id, perubahan) => {
    setData((prev) => ({
      ...prev,
      [tipe]: prev[tipe].map((item) =>
        item.id === id ? { ...item, ...perubahan } : item
      ),
    }));
  };

  // ---------------- HAPUS DATA ----------------
  const hapusData = (tipe, id) => {
    setData((prev) => ({
      ...prev,
      [tipe]: prev[tipe].filter((item) => item.id !== id),
    }));
  };

  return (
    <DataContext.Provider
      value={{ data, getData, tambahData, ubahData, hapusData }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
