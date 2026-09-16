const unavailableStatuses = new Set(['En desarrollo', 'Disponible próximamente'])

function isProductAvailable(availability) {
  return !unavailableStatuses.has(availability)
}

export default isProductAvailable
