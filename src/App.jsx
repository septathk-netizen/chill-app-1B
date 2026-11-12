import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { AuthProvider } from "../componen/pages/AuthContext.jsx";
import "./App.css";
import Navbar from "../componen/navbar.jsx";
import Footer from "../componen/footer.jsx";
import Home from "../componen/Home.jsx";
import Film from "../componen/pages/film.jsx";
import Series from "../componen/pages/series.jsx";
import DaftarSaya from "../componen/pages/Daftar-Saya.jsx";
import ProfilSaya from "../componen/pages/Profil_saya.jsx";
import UbahPremium from "../componen/pages/UbahPremium.jsx";
import Login from "../componen/pages/Login.jsx";
import Daftar from "../componen/pages/Daftar.jsx";


function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Halaman auth tanpa navbar & footer */}
          <Route path="/login" element={<Login />} />
          <Route path="/daftar" element={<Daftar />} />

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="film" element={<Film />} />
            <Route path="DaftarSaya" element={<DaftarSaya />} />
            <Route path="Series" element={<Series />} />
            <Route path="Profil" element={<ProfilSaya />} />
            <Route path="Premium" element={<UbahPremium />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
