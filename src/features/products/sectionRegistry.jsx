import sectionTypes from './sectionTypes'

const componentLoaders = {
  hero: () => import('../../components/shared/VideoHero/VideoHero'),
  featureGrid: () => import('../../components/shared/FeatureGrid/FeatureGrid'),
  textImage: () => import('../../components/shared/TextImageCard/TextImageCard'),
  detailCards: () => import('../../components/shared/DetailCard/DetailCard'),
  collage: () => import('../../components/shared/CollageCard/CollageCard'),
  links: () => import('../../components/shared/ProductLinksCard/ProductLinksCard'),
  cta: () => import('../../components/shared/CtaSection/CtaSection'),
}

const heroVariantLoaders = {
  video: () => import('../../components/shared/VideoHero/VideoHero'),
  launch: () => import('../../components/shared/LaunchHero/LaunchHero'),
  simple: () => import('../../components/shared/Hero/Hero'),
}

async function resolveSectionComponent(section) {
  if (section.type === 'hero') {
    const loader = heroVariantLoaders[section.variant] || heroVariantLoaders.video
    const mod = await loader()
    return mod.default
  }

  const loader = componentLoaders[section.type]
  if (!loader) {
    return null
  }

  const mod = await loader()
  return mod.default
}

export { sectionTypes, resolveSectionComponent }