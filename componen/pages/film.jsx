import "../../style/film.css";
import Hero from './props elemnt/IklanAtas.jsx'
import LatarBlakang1 from '../../src/assets/Rectangle 9 (2).png'
import Test1 from "../../src/assets/Frame 76.png";
import Frame66 from "../../src/assets/Frame 66.png";
import LayoutFilm from "./props elemnt/layoutfilm.jsx";
import Series1 from '../../src/assets/Frame 66 (1).png';
import Series2 from '../../src/assets/Frame 66 (2).png';
import Series3 from '../../src/assets/Component 2 (2).png';
import Series4 from '../../src/assets/Frame 68 (1).png';




function Film () {
    return (
<div>
        <Hero
  img={LatarBlakang1}
  title="boy"
  description="disini filmnya"
/>
  <LayoutFilm
    title="Melanjutkan Tonton Series"
    items={[
      { img: Series1,   },
      { img: Series2,   },
      { img: Series3,   },
      { img: Series4,   },
    ]}
/>


  <LayoutFilm
    title="Top rating film dan series hari ini"
    items={[
      { img: Test1,   },
      { img: Frame66,  },
      { img: Test1,   },
    ]}
  />
  <h1>ini halamn film</h1>



    
</div>
    );
}
export default  Film 