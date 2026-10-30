import Hero from './props elemnt/IklanAtas.jsx'
import LatarBlakang from '../../src/assets/Rectangle 9 (1).png';
import LayoutFilm from "./props elemnt/layoutfilm.jsx";
import Series1 from '../../src/assets/Frame 66 (1).png';
import Series2 from '../../src/assets/Frame 66 (2).png';
import Series3 from '../../src/assets/Component 2 (2).png';
import Series4 from '../../src/assets/Frame 68 (1).png';
import Persembahan1 from '../../src/assets/Frame 74 (3).png';
import Persembahan2 from '../../src/assets/Frame 78 (2).png';
import Persembahan3 from '../../src/assets/Frame 76 (2).png';
import Persembahan4 from '../../src/assets/Frame 79.png';
import Persembahan5 from '../../src/assets/Component 1 (5).png';

function Series (){
    return (
        <div>

        <Hero
  img={LatarBlakang}
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
    title="Series Persembahan Chill"
    items={[
      { img: Persembahan1,   },
      { img: Persembahan2,   },
      { img: Persembahan3,   },
      { img: Persembahan4,   },
      { img: Persembahan5,   },
    ]}
/>
  <LayoutFilm
    title="Top Rating Series Hari in"
    items={[
      { img: Persembahan1,   },
      { img: Persembahan2,   },
      { img: Persembahan3,   },
      { img: Persembahan4,   },
      { img: Persembahan5,   },
    ]}
/>
  <LayoutFilm
    title="Series Trending"
    items={[
      { img: Persembahan1,   },
      { img: Persembahan2,   },
      { img: Persembahan3,   },
      { img: Persembahan4,   },
      { img: Persembahan5,   },
    ]}
/>
  <LayoutFilm
    title="Rilis Baru"
    items={[
      { img: Persembahan1,   },
      { img: Persembahan2,   },
      { img: Persembahan3,   },
      { img: Persembahan4,   },
      { img: Persembahan5,   },
    ]}
/>





  </div>



    )
}

export default Series