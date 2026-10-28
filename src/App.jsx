import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "../componen/navbar.jsx";
import Footer from "../componen/footer.jsx";
import Home from "../componen/Home.jsx";
import Film from "../componen/pages/film.jsx";
import Series from "../componen/pages/series.jsx";
import DaftarSaya from "../componen/pages/Daftar-Saya.jsx";


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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="film" element={<Film />} />
          <Route path="DaftarSaya" element={<DaftarSaya />} />
          <Route path="Series" element={<Series />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
