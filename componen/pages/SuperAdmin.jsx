import "../../style/SuperAdmin.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDataApi, addItem, updateItem, deleteItem } from "../../src/store/redux/apiSlice";
import { getContent, createContent, updateContent, deleteContent } from "../../src/services/api/contentApi";
import { daftarGambar } from "./daftarGambar.js";

// ============================================================
// HALAMAN SUPER ADMIN
// CRUD konten Hero + LayoutFilm untuk halaman Series & Film
// ============================================================

function SuperAdmin() {
  const dispatch = useDispatch();
  // state: salinan data yang bisa diedit — muat dari API
  const [halaman, setHalaman] = useState("series"); // "series" | "film"
  const [data, setData] = useState({ series: [], film: [] });
  const [hero, setHero] = useState({ film: null, series: null });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Load data from API on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const content = await getContent();
        dispatch(setDataApi(content));
        // Transform API data to local state format
        const transformed = { series: [], film: [] };
        const heroData = { film: null, series: null };
        content.forEach(item => {
          if (item.type === "hero") {
            heroData[item.page] = item;
          } else if (item.type === "series") {
            transformed.series.push(item);
          } else if (item.type === "film") {
            transformed.film.push(item);
          }
        });
        setData(transformed);
        setHero(heroData);
      } catch (err) {
        console.error("Gagal memuat data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [dispatch]);

  const aktif = data[halaman];
  const heroAktif = hero[halaman];

  // simpan perubahan ke API
  const simpan = async () => {
    setSaving(true);
    try {
      // Save hero first
      if (heroAktif && heroAktif.id) {
        const updatedHero = await updateContent(heroAktif.id, {
          type: "hero",
          page: halaman,
          img: heroAktif.img,
          title: heroAktif.title,
          description: heroAktif.description
        });
        dispatch(updateItem(updatedHero));
      }

      // For each section in aktif, sync with API
      for (const section of aktif) {
        if (section.id && section.id.startsWith("local-")) {
          // New section - create
          const newSection = await createContent({
            type: halaman,
            kategori: section.kategori,
            items: section.items
          });
          dispatch(addItem(newSection));
          // Update local ID
          setData(prev => ({
            ...prev,
            [halaman]: prev[halaman].map(s => s.id === section.id ? newSection : s)
          }));
        } else if (section.id) {
          // Existing section - update
          const updated = await updateContent(section.id, {
            type: halaman,
            kategori: section.kategori,
            items: section.items
          });
          dispatch(updateItem(updated));
        }
        // Sync items within section
        for (const item of section.items) {
          if (item.id && item.id.startsWith("local-")) {
            // Note: items are embedded in section, so we update the whole section
          }
        }
      }
      alert("Perubahan tersimpan ke API! Muat ulang halaman Series/Film untuk melihatnya.");
    } catch (err) {
      console.error(err);
      alert("Gagal menyimpan: " + err.message);
    } finally {
      setSaving(false);
    }
  };

  // ---------------- HERO ----------------
  const ubahHero = (field, nilai) => {
    setHero(prev => ({
      ...prev,
      [halaman]: prev[halaman] ? { ...prev[halaman], [field]: nilai } : { [field]: nilai }
    }));
  };

  // ---------------- SECTION ----------------
  const tambahSection = () => {
    const newSection = {
      id: `local-${Date.now()}`,
      kategori: "Kategori Baru",
      items: [],
    };
    setData((prev) => ({
      ...prev,
      [halaman]: [...prev[halaman], newSection],
    }));
  };

  const ubahSection = (index, field, nilai) => {
    setData((prev) => {
      const sections = [...prev[halaman]];
      sections[index] = { ...sections[index], [field]: nilai };
      return { ...prev, [halaman]: sections };
    });
  };

  const hapusSection = async (index) => {
    if (!confirm("Hapus kategori ini beserta isinya?")) return;
    const section = aktif[index];
    if (section.id && !section.id.startsWith("local-")) {
      try {
        await deleteContent(section.id);
        dispatch(deleteItem(section.id));
      } catch (err) {
        console.error(err);
        alert("Gagal hapus dari API: " + err.message);
        return;
      }
    }
    setData((prev) => ({
      ...prev,
      [halaman]: prev[halaman].filter((_, i) => i !== index),
    }));
  };

  // ---------------- ITEM (poster film) ----------------
  const tambahItem = (sectionIndex) => {
    setData((prev) => {
      const sections = [...prev[halaman]];
      const items = [...sections[sectionIndex].items];
      items.push({ id: `local-item-${Date.now()}`, img: daftarGambar[0].img });
      sections[sectionIndex] = { ...sections[sectionIndex], items };
      return { ...prev, [halaman]: sections };
    });
  };

  const ubahItem = (sectionIndex, itemIndex, img) => {
    setData((prev) => {
      const sections = [...prev[halaman]];
      const items = [...sections[sectionIndex].items];
      items[itemIndex] = { ...items[itemIndex], img };
      sections[sectionIndex] = { ...sections[sectionIndex], items };
      return { ...prev, [halaman]: sections };
    });
  };

  const hapusItem = (sectionIndex, itemIndex) => {
    setData((prev) => {
      const sections = [...prev[halaman]];
      const items = sections[sectionIndex].items.filter(
        (_, i) => i !== itemIndex,
      );
      sections[sectionIndex] = { ...sections[sectionIndex], items };
      return { ...prev, [halaman]: sections };
    });
  };

  if (loading) {
    return <div className="loading">Memuat data dari API...</div>;
  }

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
        <button className="SA_Simpan" onClick={simpan} disabled={saving}>
          {saving ? "💾 Menyimpan..." : "💾 Simpan Semua ke API"}
        </button>
      </div>

      {/* ---------- EDIT HERO (Iklan Atas) ---------- */}
      <div className="SA_Card">
        <h2>🎬 Hero / Iklan Atas</h2>
        <div className="SA_Form">
          <label>Gambar Latar</label>
          <select
            value={heroAktif?.img || ""}
            onChange={(e) => ubahHero("img", e.target.value)}
          >
            {daftarGambar.map((g) => (
              <option key={g.nama} value={g.img}>
                {g.nama}
              </option>
            ))}
          </select>
          {heroAktif?.img && <img className="SA_Preview" src={heroAktif.img} alt="preview" />}

          <label>Judul</label>
          <input
            value={heroAktif?.title || ""}
            onChange={(e) => ubahHero("title", e.target.value)}
          />

          <label>Deskripsi</label>
          <textarea
            rows={4}
            value={heroAktif?.description || ""}
            onChange={(e) => ubahHero("description", e.target.value)}
          />
        </div>
      </div>

      {/* ---------- EDIT SECTIONS ---------- */}
      {aktif.map((section, sIndex) => (
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
