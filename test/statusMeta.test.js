import { describe, it, expect } from 'vitest'
import { productStatuses, statusMeta, getStatusMeta } from '../src/features/products/statusMeta'

describe('statusMeta', () => {
  describe('productStatuses', () => {
    it('contiene los estados válidos', () => {
      expect(productStatuses).toEqual(['released', 'beta', 'soon'])
    })
  })

  describe('statusMeta', () => {
    it('tiene configuración para released', () => {
      expect(statusMeta.released.label).toBe('Disponible')
      expect(statusMeta.released.canDownload).toBe(true)
      expect(statusMeta.released.isLaunchActive).toBe(true)
    })

    it('tiene configuración para beta', () => {
      expect(statusMeta.beta.label).toBe('En beta')
      expect(statusMeta.beta.canDownload).toBe(true)
    })

    it('tiene configuración para soon', () => {
      expect(statusMeta.soon.label).toBe('Disponible próximamente')
      expect(statusMeta.soon.canDownload).toBe(false)
      expect(statusMeta.soon.isLaunchActive).toBe(false)
    })
  })

  describe('getStatusMeta', () => {
    it('devuelve meta para estado conocido', () => {
      expect(getStatusMeta('released')).toBe(statusMeta.released)
    })

    it('devuelve meta para beta', () => {
      expect(getStatusMeta('beta')).toBe(statusMeta.beta)
    })

    it('devuelve meta para soon', () => {
      expect(getStatusMeta('soon')).toBe(statusMeta.soon)
    })

    it('devuelve soon para estado desconocido', () => {
      expect(getStatusMeta('unknown')).toBe(statusMeta.soon)
    })

    it('devuelve soon para string vacío', () => {
      expect(getStatusMeta('')).toBe(statusMeta.soon)
    })
  })
})
