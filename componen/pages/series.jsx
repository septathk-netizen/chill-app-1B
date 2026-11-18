import Hero from './props elemnt/IklanAtas.jsx'
import LayoutFilm from "./props elemnt/layoutfilm.jsx";
import { useState, useEffect } from "react";
import { dataSeries } from './dataFilm.js'

function Series (){
    // muat data terbaru dari SuperAdmin (localStorage) kalau ada
    const [data, setData] = useState(dataSeries);

    useEffect(() => {
        const simpan = JSON.parse(localStorage.getItem("dataKonten"));
        if (simpan?.series) setData(simpan.series);
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
    )
}

export default Series
