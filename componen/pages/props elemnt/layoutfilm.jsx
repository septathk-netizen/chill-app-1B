import { useRef } from "react";
import "../../../style/layoutfilm.css";

function LayoutFilm({ title, items }) {
  const rowRef = useRef(null);

  // fungsi untuk menggeser (scroll) barisan kartu film
  const geser = (arah) => {
    rowRef.current?.scrollBy({
      left: arah * 320, // geser selebar 1 kartu + gap
      behavior: "smooth",
    });
  };

  return (
    <section className="layout-film">
      <div className="layout-film-head">
        <h2 className="layout-film-title">{title}</h2>
        <div className="layout-film-nav">
          <button
            className="layout-film-arrow"
            onClick={() => geser(-1)}
            aria-label="Geser kiri"
          >
            ‹
          </button>
          <button
            className="layout-film-arrow"
            onClick={() => geser(1)}
            aria-label="Geser kanan"
          >
            ›
          </button>
        </div>
      </div>

      <div className="layout-film-row" ref={rowRef}>
        {items.map((item, index) => (
          <div className="layout-film-card" key={index}>
            <img className="layout-film-img" src={item.img} alt={item.title} />
            <div className="layout-film-info">
              <p className="layout-film-judul">{item.title}</p>
              <span className="layout-film-rating">{item.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LayoutFilm;
