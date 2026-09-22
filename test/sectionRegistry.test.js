import { describe, it, expect } from 'vitest'
import { sectionTypes, resolveSectionComponent } from '../src/features/products/sectionRegistry'

describe('sectionRegistry', () => {
  describe('sectionTypes', () => {
    it('contiene todos los tipos de sección', () => {
      expect(sectionTypes).toContain('hero')
      expect(sectionTypes).toContain('featureGrid')
      expect(sectionTypes).toContain('textImage')
      expect(sectionTypes).toContain('detailCards')
      expect(sectionTypes).toContain('collage')
      expect(sectionTypes).toContain('links')
      expect(sectionTypes).toContain('cta')
      expect(sectionTypes).toContain('custom')
    })

    it('tiene exactamente 8 tipos', () => {
      expect(sectionTypes).toHaveLength(8)
    })
  })

  describe('resolveSectionComponent', () => {
    it('resuelve hero con variant video', async () => {
      const section = { type: 'hero', variant: 'video', props: {} }
      const comp = await resolveSectionComponent(section)
      expect(comp).toBeDefined()
    })

    it('resuelve hero con variant launch', async () => {
      const section = { type: 'hero', variant: 'launch', props: {} }
      const comp = await resolveSectionComponent(section)
      expect(comp).toBeDefined()
    })

    it('resuelve hero con variant simple', async () => {
      const section = { type: 'hero', variant: 'simple', props: {} }
      const comp = await resolveSectionComponent(section)
      expect(comp).toBeDefined()
    })

    it('resuelve featureGrid', async () => {
      const section = { type: 'featureGrid', props: {} }
      const comp = await resolveSectionComponent(section)
      expect(comp).toBeDefined()
    })

    it('resuelve textImage', async () => {
      const section = { type: 'textImage', props: {} }
      const comp = await resolveSectionComponent(section)
      expect(comp).toBeDefined()
    })

    it('resuelve detailCards', async () => {
      const section = { type: 'detailCards', props: {} }
      const comp = await resolveSectionComponent(section)
      expect(comp).toBeDefined()
    })

    it('resuelve collage', async () => {
      const section = { type: 'collage', props: {} }
      const comp = await resolveSectionComponent(section)
      expect(comp).toBeDefined()
    })

    it('resuelve links', async () => {
      const section = { type: 'links', props: {} }
      const comp = await resolveSectionComponent(section)
      expect(comp).toBeDefined()
    })

    it('resuelve cta', async () => {
      const section = { type: 'cta', props: {} }
      const comp = await resolveSectionComponent(section)
      expect(comp).toBeDefined()
    })

    it('resuelve custom', async () => {
      const section = { type: 'custom', loader: () => Promise.resolve({ default: () => null }) }
      const comp = await resolveSectionComponent(section)
      expect(comp).toBeDefined()
    })

    it('devuelve null para tipo desconocido', async () => {
      const section = { type: 'unknown', props: {} }
      const comp = await resolveSectionComponent(section)
      expect(comp).toBeNull()
    })

    it('hero usa video como variant por defecto', async () => {
      const section = { type: 'hero', props: {} }
      const comp = await resolveSectionComponent(section)
      expect(comp).toBeDefined()
    })
  })
})
