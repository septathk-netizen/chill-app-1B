import heroBg from "../src/assets/Rectangle 9.png";
import Hero from "./pages/IklanAtas.jsx";

function Home() {
  return (
    <section>
      <Hero
        img={heroBg}
        title="Duty After School"
        description="Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang."
         
      />
      <h1>ini halam home utama</h1>
    </section>
  );
}

export default Home;
