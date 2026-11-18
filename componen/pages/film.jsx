import "../../style/film.css";
import Hero from "./props elemnt/IklanAtas.jsx";
import LayoutFilm from "./props elemnt/layoutfilm.jsx";
import { dataFilm } from "./dataFilm.js";

function Film() {
  return (
    <div>
      <Hero
        img={dataFilm.hero.img}
        title={dataFilm.hero.title}
        description={dataFilm.hero.description}
      />

      {dataFilm.sections.map((section, index) => (
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
