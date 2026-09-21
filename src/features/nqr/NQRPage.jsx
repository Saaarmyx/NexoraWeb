import { products } from '../products'
import useProductTheme from '../../hooks/useProductTheme'
import { Reveal } from '../../components/ui'
import {
  CollageCard,
  DetailCard,
  ProductLinksCard,
  TextImageCard,
  VideoHero,
} from '../../components/sections'

import { nqrFeatures, nqrHero, nqrLinks, nqrPerformance, nqrViews } from './nqr.data'

const REVEAL_STAGGER_STEP = 90

function NQRPage() {
  const product = products.find((item) => item.slug === 'nqr')

  useProductTheme(product?.theme, product?.accent)

  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <VideoHero {...nqrHero} />
        </Reveal>

        <Reveal as="section" delay={REVEAL_STAGGER_STEP} className="nqr-section">
          <CollageCard {...nqrFeatures} />
        </Reveal>

        <Reveal delay={REVEAL_STAGGER_STEP * 2}>
          <DetailCard {...nqrViews} />
        </Reveal>

        <Reveal delay={REVEAL_STAGGER_STEP * 3}>
          <TextImageCard {...nqrPerformance} />
        </Reveal>

        <Reveal delay={REVEAL_STAGGER_STEP * 4}>
          <ProductLinksCard {...nqrLinks} />
        </Reveal>
      </div>
    </section>
  )
}

export default NQRPage
