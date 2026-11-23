import Hero from './props elemnt/IklanAtas.jsx'
import LayoutFilm from "./props elemnt/layoutfilm.jsx";
import { useState, useEffect } from "react";
import { dataSeries } from './dataFilm.js'
import { useAuth } from './AuthContext.jsx'

function Series (){
    const { user, refreshDaftarSaya, tambahKeDaftar } = useAuth();

    // muat data terbaru dari SuperAdmin (localStorage) kalau ada
    const [data, setData] = useState(dataSeries);

    useEffect(() => {
        const simpan = JSON.parse(localStorage.getItem("dataKonten"));
        if (simpan?.series) setData(simpan.series);
    }, []);

    const klikSeries = async (item, kategori, index) => {
        if (!user) {
            alert("Silakan login dulu untuk menambahkan series ke Daftar Saya.");
            return;
        }
        try {
            await refreshDaftarSaya();
            await tambahKeDaftar({
                id: `series-${kategori}-${index}`,
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
            onKlikFilm={klikSeries}
          />
        ))}

  </div>
    )
}

export default Series
