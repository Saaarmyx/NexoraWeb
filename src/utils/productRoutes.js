function getProductPath(product) {
  return product.slug === 'photos' ? '/products/nphotos' : `/products/${product.slug}`
}

export default getProductPath
