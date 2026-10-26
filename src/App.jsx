import { useState } from 'react';
import './App.css';
import Logo from '../public/Logo.png';
import UserIcon from './assets/Ellipse 395.png';
import ArowDone from './assets/KeyboardArrowDown.png';
import FrameLogo from '../src/assets/Frame 1000004495.png';



import Test  from '../componen/IklanAtas.jsx';




function App() {

  return (
    <div>

    <div className='BagianHeader'>
<header className="Navbar">
  <img className="Navbar-Logo" src={Logo} />
  <nav className="Navbar-Link">
    <a className="Body-Large-Medium" href="">
      Series
    </a>
    <a className="Body-Large-Medium" href="">
      Film
    </a>
    <a className="Body-Large-Medium" href="">
      Daftar Saya
    </a>
  </nav>
  <div className="Profile">
    <img className="User-Icon" src={UserIcon} />
    <button className="Btn-Unstyled">
        <img className='Arow' src={ArowDone} />
    </button>
  </div>
</header>
</div>

<Test/>



<footer>
  <img src={FrameLogo} />
  <div className="Footer-Column">
    <h3>genre</h3>
    <button>aksi</button>
    <button>anak-anak</button>
    <button>anime</button>
    <button>britania</button>
  </div>
  <div className="Footer-Column">
    <button>drama</button>
    <button>fantasi ilmiah &amp; fantasi</button>
    <button>kejahatan</button>
    <button>KDrama</button>
  </div>
  <div className="Footer-Column">
    <button>komedi</button>
    <button>petualangan</button>
    <button>perang</button>
    <button>romantis</button>
  </div>
  <div Footer-Column="">
    <button>sains &amp; alam</button>
    <button>thriller</button>
  </div>
  <div Footer-Column1="">
    <h3>bantuan</h3>
    <button>FAQ</button>
    <button>kontak kami</button>
    <button>privasi</button>
    <button>syarat &amp; ketentuan</button>
  </div>
</footer>



    </div>


    
  )
}

export default App
