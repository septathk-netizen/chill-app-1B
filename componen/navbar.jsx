import { Link } from "react-router-dom";
import Logo from "../src/assets/Logo.png";
import UserIcon from "../src/assets/Avatar.png";
import ArowDone from "../src/assets/KeyboardArrowDown.png";
import "../style/main.css";

function Navbar() {
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
            <button className="Btn-Unstyled">
              <img className="Arow" src={ArowDone} alt="" />
            </button>
          </div>
        </header>
      </div>

    </div>
  );
}

export default Navbar;
