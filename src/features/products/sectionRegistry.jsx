import sectionTypes from './sectionTypes'

const componentLoaders = {
  hero: () => import('../../components/sections/VideoHero/VideoHero'),
  featureGrid: () => import('../../components/sections/FeatureGrid/FeatureGrid'),
  textImage: () => import('../../components/sections/TextImageCard/TextImageCard'),
  detailCards: () => import('../../components/sections/DetailCard/DetailCard'),
  collage: () => import('../../components/sections/CollageCard/CollageCard'),
  links: () => import('../../components/sections/ProductLinksCard/ProductLinksCard'),
  cta: () => import('../../components/sections/CtaSection/CtaSection'),
}

const heroVariantLoaders = {
  video: () => import('../../components/sections/VideoHero/VideoHero'),
  launch: () => import('../../components/sections/LaunchHero/LaunchHero'),
  simple: () => import('../../components/sections/Hero/Hero'),
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