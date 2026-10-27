import { useState } from "react";
import "../style/footer.css";
import logoIcon from "../src/assets/movie-open.png";

export default function Footer() {
  // Satu state untuk setiap menu (dipakai di tampilan mobile)
  const [genreOpen, setGenreOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  return (
    <footer className="footer">
      {/* Bagian kiri: logo dan copyright */}
      <div className="footer-brand">
        <div className="footer-logo">
          <img src={logoIcon} alt="" />
          <span>CHILL</span>
        </div>
        <p className="footer-copy">@2023 Chill All Rights Reserved.</p>
      </div>

      {/* Bagian kanan: menu */}
      <div className="footer-menus">
        {/* Menu Genre */}
        <div className="footer-menu">
          <button
            className="footer-menu-header"
            onClick={() => setGenreOpen(!genreOpen)}
          >
            <span>Genre</span>
            <svg
              className={genreOpen ? "footer-chevron open" : "footer-chevron"}
              width="24"
              height="24"
              viewBox="0 0 28 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>

          <div className={genreOpen ? "footer-columns show" : "footer-columns"}>
            <ul className="footer-list">
              <li><a href="#">Aksi</a></li>
              <li><a href="#">Anak-anak</a></li>
              <li><a href="#">Anime</a></li>
              <li><a href="#">Britania</a></li>
            </ul>

            <ul className="footer-list">
              <li><a href="#">Drama</a></li>
              <li><a href="#">Fantasi Ilmiah & Fantasi</a></li>
              <li><a href="#">Kejahatan</a></li>
              <li><a href="#">KDrama</a></li>
            </ul>

            <ul className="footer-list">
              <li><a href="#">Komedi</a></li>
              <li><a href="#">Petualangan</a></li>
              <li><a href="#">Perang</a></li>
              <li><a href="#">Romantis</a></li>
            </ul>

            <ul className="footer-list">
              <li><a href="#">Sains & Alam</a></li>
              <li><a href="#">Thriller</a></li>
            </ul>
          </div>
        </div>

        {/* Menu Bantuan */}
        <div className="footer-menu">
          <button
            className="footer-menu-header"
            onClick={() => setHelpOpen(!helpOpen)}
          >
            <span>Bantuan</span>
            <svg
              className={helpOpen ? "footer-chevron open" : "footer-chevron"}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>

          <div className={helpOpen ? "footer-columns show" : "footer-columns"}>
            <ul className="footer-list">
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Kontak Kami</a></li>
              <li><a href="#">Privasi</a></li>
              <li><a href="#">Syarat & Ketentuan</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}