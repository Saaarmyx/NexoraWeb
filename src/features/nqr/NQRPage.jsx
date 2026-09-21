import { products } from '../products'
import useProductTheme from '../../hooks/useProductTheme'
import {
  CollageCard,
  DetailCard,
  ProductLinksCard,
  TextImageCard,
  VideoHero,
} from '../../components/sections'

import { nqrFeatures, nqrHero, nqrLinks, nqrPerformance, nqrViews } from './nqr.data'

function NQRPage() {
  const product = products.find((item) => item.slug === 'nqr')

  useProductTheme(product?.theme)

  return (
    <section className="section">
      <div className="container">
        <VideoHero {...nqrHero} />

        <section className="nqr-section">
          <CollageCard {...nqrFeatures} />
        </section>

        <DetailCard {...nqrViews} />
        <TextImageCard {...nqrPerformance} />
        <ProductLinksCard {...nqrLinks} />
      </div>
    </section>
  )
}

export default NQRPage
