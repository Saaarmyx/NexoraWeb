import { lazy } from 'react'
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

// Cache de lazy components keyed por type/variante de sección. React.lazy es
// el mecanismo correcto de React para componentes asíncronos: la resolución
// del `import()` la administra React y las props llegan al componente tal cual
// se declaran en el elemento (nunca se invoca la función del componente como
// si fuera un updater de estado).
const lazySectionComponents = new Map()

function getLazySectionComponent(section) {
  const type = section?.type
  if (!type || !sectionTypes.includes(type)) {
    return null
  }

  const key = type === 'hero' ? `hero:${section.variant || 'video'}` : type

  if (!lazySectionComponents.has(key)) {
    const lazyComponent = lazy(() =>
      resolveSectionComponent(section).then((Component) => ({ default: Component })),
    )
    lazySectionComponents.set(key, lazyComponent)
  }

  return lazySectionComponents.get(key)
}

export { sectionTypes, resolveSectionComponent, getLazySectionComponent }
