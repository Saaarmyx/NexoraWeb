// NOTA: imports directos (nunca el barrel de sections): el barrel ya tira de
// ProductMedia → ProductArt → data/products → validateProduct → este registro.
// Importar el barrel aquí crearía un ciclo con TDZ en dev.
import CollageCard from '../../components/shared/CollageCard/CollageCard'
import CtaSection from '../../components/shared/CtaSection/CtaSection'
import DetailCard from '../../components/shared/DetailCard/DetailCard'
import FeatureGrid from '../../components/shared/FeatureGrid/FeatureGrid'
import Hero from '../../components/shared/Hero/Hero'
import LaunchHero from '../../components/shared/LaunchHero/LaunchHero'
import ProductLinksCard from '../../components/shared/ProductLinksCard/ProductLinksCard'
import TextImageCard from '../../components/shared/TextImageCard/TextImageCard'
import VideoHero from '../../components/shared/VideoHero/VideoHero'
import sectionTypes from './sectionTypes'

const sectionComponents = {
  hero: VideoHero,
  featureGrid: FeatureGrid,
  textImage: TextImageCard,
  detailCards: DetailCard,
  collage: CollageCard,
  links: ProductLinksCard,
  cta: CtaSection,
}

const heroVariants = {
  video: VideoHero,
  launch: LaunchHero,
  simple: Hero,
}

function resolveSectionComponent(section) {
  if (section.type === 'hero') {
    return heroVariants[section.variant] || heroVariants.video
  }

  return sectionComponents[section.type] || null
}

export { sectionComponents, heroVariants, sectionTypes, resolveSectionComponent }
