import { products } from '../products'
import useProductTheme from '../../hooks/useProductTheme'
import {
  CollageCard,
  DetailCard,
  ProductLinksCard,
  TextImageCard,
  VideoHero,
} from '../../components/sections'

import {
  nphotosFeatures,
  nphotosHero,
  nphotosLinks,
  nphotosPerformance,
  nphotosViews,
} from './nphotos.data'

function NPhotosPage() {
  const product = products.find((item) => item.slug === 'nphotos')

  useProductTheme(product?.theme)

  return (
    <section className="section">
      <div className="container">
        <VideoHero {...nphotosHero} />

        <section className="nphotos-section">
          <CollageCard {...nphotosFeatures} />
        </section>

        <DetailCard {...nphotosViews} />
        <TextImageCard {...nphotosPerformance} />
        <ProductLinksCard {...nphotosLinks} />
      </div>
    </section>
  )
}

export default NPhotosPage
