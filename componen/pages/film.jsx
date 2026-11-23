import "../../style/film.css";
import { useAuth } from "./AuthContext.jsx";
import Hero from "./props elemnt/IklanAtas.jsx";
import LayoutFilm from "./props elemnt/layoutfilm.jsx";
import { useState, useEffect } from "react";
import { dataFilm } from "./dataFilm.js";

function Film() {
  const { user, refreshDaftarSaya, tambahKeDaftar } = useAuth();

  // muat data terbaru dari SuperAdmin (localStorage) kalau ada
  const [data, setData] = useState(dataFilm);

  useEffect(() => {
    const simpan = JSON.parse(localStorage.getItem("dataKonten"));
    if (simpan?.film) setData(simpan.film);
  }, []);

  // klik film -> langsung masuk Daftar Saya tanpa alert
  const klikFilm = async (item, kategori, index) => {
    if (!user) {
      alert("Silakan login dulu untuk menambahkan film ke Daftar Saya.");
      return;
    }
    try {
      await refreshDaftarSaya();
      await tambahKeDaftar({
        id: `film-${kategori}-${index}`,
        img: item.img,
        title: item.title || kategori,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Hero
        img={data.hero.img}
        title={data.hero.title}
        description={data.hero.description}
      />

      {data.sections.map((section, index) => (
        <LayoutFilm
          key={index}
          title={section.kategori}
          items={section.items}
          onKlikFilm={klikFilm}
        />
      ))}
    </div>
  );
}
export default Film;
