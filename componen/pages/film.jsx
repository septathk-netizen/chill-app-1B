import "../../style/film.css";
import { useAuth } from "./AuthContext.jsx";
import Hero from "./props elemnt/IklanAtas.jsx";
import LayoutFilm from "./props elemnt/layoutfilm.jsx";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDataApi } from "../../src/store/redux/apiSlice";
import { getContent } from "../../src/services/api/contentApi";

function Film() {
  const { user, refreshDaftarSaya, tambahKeDaftar } = useAuth();
  const dispatch = useDispatch();
  const apiData = useSelector((state) => state.apiData);
  const filmData = apiData.filter(item => item.type === "film");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getContent();
        dispatch(setDataApi(data));
      } catch (err) {
        console.error("Gagal memuat data film:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [dispatch]);

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

  if (loading) {
    return <div className="loading">Memuat data film...</div>;
  }

  return (
    <div>
      <Hero halaman="film" />
      {filmData.map((section, index) => (
        <LayoutFilm
          key={section.id || index}
          title={section.kategori}
          halaman="film"
          items={section.items}
          onKlikFilm={klikFilm}
        />
      ))}
    </div>
  );
}
export default Film;
