const productMotifIcons = {
  ncode: 'code',
  nphotos: 'image',
  nqr: 'qr',
  ncloud: 'cloud',
  nconnect: 'share',
  os: 'chip',
}

function getProductIconName(slug) {
  return productMotifIcons[slug] || 'cloud'
}

export { productMotifIcons, getProductIconName }
