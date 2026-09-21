import { products } from '../products'
import useProductTheme from '../../hooks/useProductTheme'
import {
  CollageCard,
  DetailCard,
  TextImageCard,
  VideoHero,
  ProductLinksCard,
} from '../../components/sections'

import { ncodeFeatures, ncodeHero, ncodeLinks, ncodePerformance, ncodeThemes } from './ncode.data'

function NCodePage() {
  const product = products.find((item) => item.slug === 'ncode')

  useProductTheme(product?.theme, product?.accent)

  return (
    <section className="section">
      <div className="container">
        <VideoHero {...ncodeHero} />

        <section className="ncode-section">
          <CollageCard {...ncodeFeatures} />
        </section>

        <DetailCard {...ncodeThemes} />
        <TextImageCard {...ncodePerformance} />
        <ProductLinksCard {...ncodeLinks} />
      </div>
    </section>
  )
}

export default NCodePage
