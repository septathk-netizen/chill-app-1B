import Hero from './props elemnt/IklanAtas.jsx'
import LayoutFilm from "./props elemnt/layoutfilm.jsx";
import { dataSeries } from './dataFilm.js'

function Series (){
    return (
        <div>

        <Hero
          img={dataSeries.hero.img}
          title={dataSeries.hero.title}
          description={dataSeries.hero.description}
        />

        {dataSeries.sections.map((section, index) => (
          <LayoutFilm
            key={index}
            title={section.kategori}
            items={section.items}
          />
        ))}

  </div>
    )
}

export default Series
