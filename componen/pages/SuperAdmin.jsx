import "../../style/SuperAdmin.css";
import { useState } from "react";
import { dataSeries, dataFilm } from "./dataFilm.js";
import { daftarGambar } from "./daftarGambar.js";

// ============================================================
// HALAMAN SUPER ADMIN
// CRUD konten Hero + LayoutFilm untuk halaman Series & Film
// ============================================================

function SuperAdmin() {
  // state: salinan data yang bisa diedit — muat dari localStorage kalau ada
  const [halaman, setHalaman] = useState("series"); // "series" | "film"
  const [data, setData] = useState(() => {
    try {
      const simpan = JSON.parse(localStorage.getItem("dataKonten"));
      if (simpan?.series && simpan?.film) return simpan;
    } catch {
      /* abaikan */
    }
    return {
      series: JSON.parse(JSON.stringify(dataSeries)),
      film: JSON.parse(JSON.stringify(dataFilm)),
    };
  });

  const aktif = data[halaman];

  // simpan perubahan ke localStorage
  const simpan = () => {
    localStorage.setItem(
      "dataKonten",
      JSON.stringify({ series: data.series, film: data.film }),
    );
    alert("Perubahan tersimpan! Muat ulang halaman Series/Film untuk melihatnya.");
  };

  // ---------------- HERO ----------------
  const ubahHero = (field, nilai) => {
    setData((prev) => ({
      ...prev,
      [halaman]: {
        ...prev[halaman],
        hero: { ...prev[halaman].hero, [field]: nilai },
      },
    }));
  };

  // ---------------- SECTION ----------------
  const tambahSection = () => {
    setData((prev) => ({
      ...prev,
      [halaman]: {
        ...prev[halaman],
        sections: [
          ...prev[halaman].sections,
          { kategori: "Kategori Baru", items: [] },
        ],
      },
    }));
  };

  const ubahSection = (index, field, nilai) => {
    setData((prev) => {
      const sections = [...prev[halaman].sections];
      sections[index] = { ...sections[index], [field]: nilai };
      return { ...prev, [halaman]: { ...prev[halaman], sections } };
    });
  };

  const hapusSection = (index) => {
    if (!confirm("Hapus kategori ini beserta isinya?")) return;
    setData((prev) => ({
      ...prev,
      [halaman]: {
        ...prev[halaman],
        sections: prev[halaman].sections.filter((_, i) => i !== index),
      },
    }));
  };

  // ---------------- ITEM (poster film) ----------------
  const tambahItem = (sectionIndex) => {
    setData((prev) => {
      const sections = [...prev[halaman].sections];
      const items = [...sections[sectionIndex].items];
      items.push({ img: daftarGambar[0].img });
      sections[sectionIndex] = { ...sections[sectionIndex], items };
      return { ...prev, [halaman]: { ...prev[halaman], sections } };
    });
  };

  const ubahItem = (sectionIndex, itemIndex, img) => {
    setData((prev) => {
      const sections = [...prev[halaman].sections];
      const items = [...sections[sectionIndex].items];
      items[itemIndex] = { img };
      sections[sectionIndex] = { ...sections[sectionIndex], items };
      return { ...prev, [halaman]: { ...prev[halaman], sections } };
    });
  };

  const hapusItem = (sectionIndex, itemIndex) => {
    setData((prev) => {
      const sections = [...prev[halaman].sections];
      const items = sections[sectionIndex].items.filter(
        (_, i) => i !== itemIndex,
      );
      sections[sectionIndex] = { ...sections[sectionIndex], items };
      return { ...prev, [halaman]: { ...prev[halaman], sections } };
    });
  };

  return (
    <div className="SuperAdmin">
      <h1>Super Admin — Kelola Konten</h1>

      {/* Pilih halaman */}
      <div className="SA_Tab">
        <button
          className={halaman === "series" ? "aktif" : ""}
          onClick={() => setHalaman("series")}
        >
          Halaman Series
        </button>
        <button
          className={halaman === "film" ? "aktif" : ""}
          onClick={() => setHalaman("film")}
        >
          Halaman Film
        </button>
        <button className="SA_Simpan" onClick={simpan}>
          💾 Simpan Semua
        </button>
      </div>

      {/* ---------- EDIT HERO ---------- */}
      <div className="SA_Card">
        <h2>Hero (Iklan Atas)</h2>

        <div className="SA_Form">
          <label>Judul</label>
          <input
            value={aktif.hero.title}
            onChange={(e) => ubahHero("title", e.target.value)}
          />

          <label>Deskripsi</label>
          <textarea
            rows={4}
            value={aktif.hero.description}
            onChange={(e) => ubahHero("description", e.target.value)}
          />

          <label>Gambar Latar</label>
          <select
            value={aktif.hero.img}
            onChange={(e) => ubahHero("img", e.target.value)}
          >
            {daftarGambar.map((g) => (
              <option key={g.nama} value={g.img}>
                {g.nama}
              </option>
            ))}
          </select>

          <img className="SA_Preview" src={aktif.hero.img} alt="preview" />
        </div>
      </div>

      {/* ---------- EDIT SECTIONS ---------- */}
      {aktif.sections.map((section, sIndex) => (
        <div className="SA_Card" key={sIndex}>
          <div className="SA_CardHead">
            <input
              className="SA_Kategori"
              value={section.kategori}
              onChange={(e) => ubahSection(sIndex, "kategori", e.target.value)}
            />
            <div>
              <button onClick={() => tambahItem(sIndex)}>+ Tambah Film</button>
              <button className="SA_Hapus" onClick={() => hapusSection(sIndex)}>
                ✕ Hapus Kategori
              </button>
            </div>
          </div>

          <div className="SA_Items">
            {section.items.map((item, iIndex) => (
              <div className="SA_Item" key={iIndex}>
                <img src={item.img} alt="" />
                <select
                  value={item.img}
                  onChange={(e) => ubahItem(sIndex, iIndex, e.target.value)}
                >
                  {daftarGambar.map((g) => (
                    <option key={g.nama} value={g.img}>
                      {g.nama}
                    </option>
                  ))}
                </select>
                <button
                  className="SA_Hapus"
                  onClick={() => hapusItem(sIndex, iIndex)}
                >
                  Hapus
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}

      <button className="SA_TambahSection" onClick={tambahSection}>
        + Tambah Kategori Baru
      </button>
    </div>
  );
}

export default SuperAdmin;
