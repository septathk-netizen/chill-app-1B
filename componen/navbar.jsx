import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../src/assets/Logo.png";
import UserIcon from "../src/assets/Avatar.png";
import ArowDone from "../src/assets/KeyboardArrowDown.png";
import "../style/main.css";

function Navbar() {
const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="BagianHeader">
        <header className="Navbar">
          <img className="Navbar-Logo" src={Logo} alt="Logo" />
          <nav className="Navbar-Link">
            <Link className="Body-Large-Medium" to="/series">
              Series
            </Link>
            <Link className="Body-Large-Medium" to="/film">
              Film
            </Link>
            <Link className="Body-Large-Medium" to="/DaftarSaya">
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
      <Link to="/logout">⇥ Keluar</Link>
    </div>
  )}


          </div>
        </header>
      </div>

    </div>
  );
}

export default Navbar;
