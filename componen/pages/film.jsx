import "../../style/film.css";
import Hero from "./props elemnt/IklanAtas.jsx";
import LayoutFilm from "./props elemnt/layoutfilm.jsx";
import { useState, useEffect } from "react";
import { dataFilm } from "./dataFilm.js";

function Film() {
  // muat data terbaru dari SuperAdmin (localStorage) kalau ada
  const [data, setData] = useState(dataFilm);

  useEffect(() => {
    const simpan = JSON.parse(localStorage.getItem("dataKonten"));
    if (simpan?.film) setData(simpan.film);
  }, []);

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
        />
      ))}
    </div>
  );
}
export default Film;
