import heroBg from "../src/assets/Rectangle 9.png";
import Hero from "./pages/props elemnt/IklanAtas.jsx";
import MovieCarousel from "./pages/props elemnt/Teslayoutfilm.jsx";

const assetPathPrefix = "../src/assets";

const trendingMovies = [
  { id: 1, poster: `${assetPathPrefix}/fame 74.png`, alt: "Poster film trending pertama" },
  { id: 2, poster: `${assetPathPrefix}/fame 68.png`, alt: "Poster film trending kedua" },
  { id: 3, poster: `${assetPathPrefix}/fame 71.png`, alt: "Poster film trending ketiga" },
  { id: 4, poster: `${assetPathPrefix}/fame 68.png`, alt: "Poster film trending keempat" },
  { id: 5, poster: `${assetPathPrefix}/fame 74.png`, alt: "Poster film trending kelima" },
];
function Home() {
  return (
    <section>
      <Hero
        img={heroBg}
        title="Duty After School"
        description="Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang."
      />


      <h1>ini halam home utama</h1>
       <MovieCarousel title="Film Trending" movies={trendingMovies} />
    </section>

  );
}

export default Home;