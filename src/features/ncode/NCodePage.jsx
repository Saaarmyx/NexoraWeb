import { products } from '../products'
import useProductTheme from '../../hooks/useProductTheme'
import { CollageCard, DetailCard, TextImageCard, VideoHero } from '../../components/sections'

import { ncodeFeatures, ncodeHero, ncodePerformance, ncodeThemes } from './ncode.data'

function NCodePage() {
  const product = products.find((item) => item.slug === 'ncode')

  useProductTheme(product?.theme)

  return (
    <section className="section">
      <div className="container">
        <VideoHero {...ncodeHero} />

        <section className="ncode-section">
          <CollageCard {...ncodeFeatures} />
        </section>

        <DetailCard {...ncodeThemes} />
        <TextImageCard {...ncodePerformance} />
      </div>
    </section>
  )
}

export default NCodePage
