import Hero from "./props elemnt/IklanAtas.jsx";
import LayoutFilm from "./props elemnt/layoutfilm.jsx";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDataApi } from '../../src/store/redux/apiSlice';
import { getContent } from "../../src/services/api/contentApi";
import { useAuth } from './AuthContext.jsx'

function Series (){
    const { user, refreshDaftarSaya, tambahKeDaftar } = useAuth();
    const dispatch = useDispatch();
    const apiData = useSelector((state) => state.apiData);
    const seriesData = apiData.filter(item => item.type === "series");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getContent();
                dispatch(setDataApi(data));
            } catch (err) {
                console.error("Gagal memuat data series:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [dispatch]);

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

    if (loading) {
        return <div className="loading">Memuat data series...</div>;
    }

    return (
        <div>
        <Hero halaman="series" />
        {seriesData.map((section, index) => (
          <LayoutFilm
            key={section.id || index}
            title={section.kategori}
            halaman="series"
            items={section.items}
            onKlikFilm={klikSeries}
          />
        ))}

      </div>
    )
}

export default Series
