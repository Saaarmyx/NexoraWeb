const productMotifIcons = {
  ncode: 'code',
  nphotos: 'image',
  nqr: 'qr',
  ncloud: 'cloud',
  nconnect: 'share',
  os: 'chip',
  nfiles: 'file',
  ncalculator: 'calculator',
  nrecorder: 'record',
  npasswords: 'lock',
}

function getProductIconName(slug) {
  return productMotifIcons[slug] || 'cloud'
}

export { productMotifIcons, getProductIconName }
