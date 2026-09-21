import validateProduct from '../validateProduct'

const contentModules = import.meta.glob('../content/*.js', { eager: true })

const products = Object.values(contentModules)
  .map((module) => module.default)
  .filter((product) => product && typeof product.slug === 'string')
  .sort((a, b) => a.order - b.order)

if (import.meta.env.DEV) {
  products.forEach(validateProduct)
}

export default products
