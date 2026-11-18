import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "../componen/pages/AuthContext.jsx";
import { DataProvider } from "../componen/pages/DataContext.jsx";
import "./App.css";
import Navbar from "../componen/navbar.jsx";
import Footer from "../componen/footer.jsx";
import Film from "../componen/pages/film.jsx";
import Series from "../componen/pages/series.jsx";
import DaftarSaya from "../componen/pages/Daftar-Saya.jsx";
import ProfilSaya from "../componen/pages/Profil_saya.jsx";
import UbahPremium from "../componen/pages/UbahPremium.jsx";
import Pembayaran from "../componen/pages/Pembayaran.jsx";
import Login from "../componen/pages/Login.jsx";
import Daftar from "../componen/pages/Daftar.jsx";


// Pengunjung yang belum login dipaksa ke /login dulu
function ProtectedLayout() {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
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
      <DataProvider>
      <BrowserRouter>
        <Routes>
          {/* Halaman auth tanpa navbar & footer */}
          <Route path="/login" element={<Login />} />
          <Route path="/daftar" element={<Daftar />} />

          <Route path="/" element={<ProtectedLayout />}>
            <Route index element={<Series />} />
            <Route path="film" element={<Film />} />
            <Route path="DaftarSaya" element={<DaftarSaya />} />
            <Route path="Series" element={<Series />} />
            <Route path="Profil" element={<ProfilSaya />} />
            <Route path="Premium" element={<UbahPremium />} />
            <Route path="pembayaran" element={<Pembayaran />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
