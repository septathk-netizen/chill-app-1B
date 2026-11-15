import heroBg from "../src/assets/Rectangle 9.png";
import Hero from "./pages/props elemnt/IklanAtas.jsx";
import MovieCarousel from "./pages/props elemnt/Teslayoutfilm.jsx";


const trendingMovies = [
];
function Home() {
  return (
    <section>
      <Hero
        img={heroBg}
        title="Duty After School"
        description="Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang."
      />


    </section>

  );
}

export default Home;