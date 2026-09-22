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
  nclock: 'history',
  ncalendar: 'tasks',
  npeople: 'user-shield',
  ncam: 'image',
  nmusic: 'record',
  nbooks: 'file',
  nwallet: 'hdd',
  nmail: 'exchange-alt',
  nchat: 'share',
  ncall: 'wifi',
  nsettings: 'shield',
  nstore: 'download',
  nmeet: 'desktop',
  nflow: 'bolt',
}

function getProductIconName(slug) {
  return productMotifIcons[slug] || 'cloud'
}

export { productMotifIcons, getProductIconName }
