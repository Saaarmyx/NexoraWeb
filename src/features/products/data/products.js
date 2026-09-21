import validateProduct from '../validateProduct'
import { products } from './products-generated'

export function getProductsSync() {
  return products
}

export async function getProducts() {
  return products
}

if (import.meta.env.DEV && typeof window !== 'undefined') {
  products.forEach(validateProduct)
}

export default products