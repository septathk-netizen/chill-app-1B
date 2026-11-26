import { useSelector } from "react-redux";
import "../../../style/IklaanAtas.css";
import infoIcon from "../../../src/assets/Button.png";
import volumeIcon from "../../../src/assets/Frame 65.png";

export default function Hero({ halaman }) {
  const apiData = useSelector((state) => state.apiData);
  const hero = apiData.find((item) => item.type === "hero" && item.page === halaman);

  if (!hero) {
    return <section className="hero">Memuat hero...</section>;
  }

  return (
    <section className="hero">
      {/* Gambar latar dan lapisan gelap di atasnya */}
      <img className="hero-bg" src={hero.img} alt="" />
      <div className="hero-overlay"></div>

      {/* Isi hero */}
      <div className="hero-content">
        <div className="hero-text">
          <h1>{hero.title}</h1>
          <p>{hero.description}</p>
        </div>

        <div className="hero-actions">
          <div className="hero-buttons">
            <button className="hero-btn hero-btn-primary">Mulai</button>

            <button className="hero-btn hero-btn-secondary">
              <img src={infoIcon} alt="" />
              
            </button>

            <span className="hero-age">18+</span>
          </div>

          <img src={volumeIcon} alt="Suara mati" />
        </div>
      </div>
    </section>
  );
}