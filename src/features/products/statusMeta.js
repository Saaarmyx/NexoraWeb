const productStatuses = ['released', 'beta', 'soon']

const statusMeta = {
  released: {
    label: 'Disponible',
    badgeTone: 'neutral',
    isLaunchActive: true,
    canDownload: true,
  },
  beta: {
    label: 'En beta',
    badgeTone: 'neutral',
    isLaunchActive: true,
    canDownload: true,
  },
  soon: {
    label: 'Disponible próximamente',
    badgeTone: 'neutral',
    isLaunchActive: false,
    canDownload: false,
  },
}

function getStatusMeta(status) {
  return statusMeta[status] || statusMeta.soon
}

export { productStatuses, statusMeta, getStatusMeta }
