import "../../style/film.css";
import Hero from './props elemnt/IklanAtas.jsx'
import LatarBlakang1 from '../../src/assets/Rectangle 9 (2).png'
import LayoutFilm from "./props elemnt/layoutfilm.jsx";
import Series1 from '../../src/assets/Frame 66.png';
import Series2 from '../../src/assets/Frame 66 (3).png';
import Series3 from '../../src/assets/Frame 67.png';
import Series4 from '../../src/assets/Frame 68.png';
import Chil1 from '../../src/assets/Frame 74 (3).png';
import Chil2 from '../../src/assets/Frame 78 (2).png';
import Chil3 from '../../src/assets/Frame 76 (2).png';
import Chil4 from '../../src/assets/Frame 79.png';
import Chil5 from '../../src/assets/Frame 77 (2).png';
import Top1 from '../../src/assets/Component 1 (6).png';
import Top2 from '../../src/assets/Frame 78.png';
import Top3 from '../../src/assets/Frame 76.png';
import Top4 from '../../src/assets/Frame 77 (2).png';
import Tranding1 from '../../src/assets/Frame 74.png';
import Tranding2 from '../../src/assets/Component 1 (1).png';
import Tranding3 from '../../src/assets/Frame 76 (1).png';
import Tranding4 from '../../src/assets/Frame 77 (1).png';





function Film () {
    return (
<div>
        <Hero
  img={LatarBlakang1}
  title="AVATAR 3"
  description=" melanjutkan cerita konflik antara manusia dan Na'vi di planet Pandora. Dalam pertempuran untuk sumber daya dan kekuasaan, manusia dan sekutu 
  Na'vi bersatu untuk melindungi tanah mereka. Film ini mengangkat tema persatuan dan perlawanan terhadap eksploitasi."
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
    title="Film Persembahan Chill"
    items={[
      { img: Chil1,   },
      { img: Chil2,   },
      { img: Chil3,   },
      { img: Chil4,   },
      { img: Chil5,   },
    ]}
/>
  <LayoutFilm
    title="Top Rating Film Hari ini"
    items={[
      { img: Top1,   },
      { img: Top2,   },
      { img: Top3,   },
      { img: Top4,   },
      { img: Chil3,   },
    ]}
/>
  <LayoutFilm
    title="Film Tranding"
    items={[
      { img: Tranding1,   },
      { img: Tranding2,   },
      { img: Tranding3,   },
      { img: Tranding4,   },
      { img: Chil1,   },
    ]}
/>

  <LayoutFilm
    title="Rilis Baru"
    items={[
      { img: Chil1,   },
      { img: Chil2,   },
      { img: Chil3,   },
      { img: Chil4,   },
      { img: Chil5,   },
    ]}
/>

    
</div>
    );
}
export default  Film 