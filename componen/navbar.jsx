import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../src/assets/Logo.png";
import UserIcon from "../src/assets/Avatar.png";
import ArowDone from "../src/assets/KeyboardArrowDown.png";
import "../style/main.css";

import { useAuth } from './pages/AuthContext.jsx'

function Navbar() {
const [isOpen, setIsOpen] = useState(false);
  const { refreshDaftarSaya, logout } = useAuth();
  const navigate = useNavigate();

  // saat halaman Daftar Saya dibuka, ambil daftar terbaru dari database dulu
  const keDaftarSaya = () => {
    refreshDaftarSaya();
  };

  // keluar dari akun: hapus sesi login lalu langsung lempar ke halaman login
  const keluar = (e) => {
    e.preventDefault();
    logout();
    navigate("/login", { replace: true });
  };
  return (
    <div>
      <div className="BagianHeader">
        <header className="Navbar">
          <img className="Navbar-Logo" src={Logo} alt="Logo" />
          <nav className="Navbar-Link">
            <Link className="body-large-medium" to="/series">
              Series
            </Link>
            <Link className="body-large-medium" to="/film">
              Film
            </Link>
            <Link className="body-large-medium" to="/DaftarSaya" onClick={keDaftarSaya}>
              Daftar Saya
            </Link>
          </nav>
          <div className="Profile">
  <img className="User-Icon" src={UserIcon} alt="User" />

  <button
    className="Btn-Unstyled"
    onClick={() => setIsOpen(!isOpen)}
  >
    <img className="Arow" src={ArowDone} alt="" />
  </button>

  {isOpen && (
    <div className="dropdown-menu">
      <Link to="/profil">♟ Profil Saya</Link>
      <Link to="/premium">★ Ubah Premium</Link>
      <Link to="/superadmin">🛠 Super Admin</Link>
      <a href="#" onClick={keluar}>⇥ Keluar</a>
    </div>
  )}


          </div>
        </header>
      </div>

    </div>
  );
}

export default Navbar;
