import infoIcon from "../../src/assets/Button.png";
import volumeIcon from "../../src/assets/Frame 65.png";

export default function Hero({ img, title, description }) {
  return (
    <section className="hero">
      {/* Gambar latar dan lapisan gelap di atasnya */}
      <img className="hero-bg" src={img} alt="" />
      <div className="hero-overlay"></div>

      {/* Isi hero */}
      <div className="hero-content">
        <div className="hero-text">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>

        <div className="hero-actions">
          <div className="hero-buttons">
            <button className="hero-btn hero-btn-primary">Mulai</button>

            <button className="hero-btn hero-btn-secondary">
              <img src={infoIcon} alt="" />
              
            </button>

            <span className="hero-age">18+</span>
          </div>

          <button className="hero-mute">
            <img src={volumeIcon} alt="Suara mati" />
          </button>
        </div>
      </div>
    </section>
  );
}