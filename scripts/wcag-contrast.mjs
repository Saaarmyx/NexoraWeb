#!/usr/bin/env node
/**
 * WCAG Contrast Checker
 * Verifica que los colores del sistema cumplan los ratios de contraste WCAG 2.1.
 * Uso: node scripts/wcag-contrast.mjs
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(__dirname, '..')
const tokensPath = path.resolve(projectRoot, 'src/styles/tokens.css')

function relativeLuminance(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255
  const toLinear = (c) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4))
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b)
}

function contrastRatio(hex1, hex2) {
  const l1 = relativeLuminance(hex1)
  const l2 = relativeLuminance(hex2)
  const lighter = Math.max(l1, l2)
  const darker = Math.min(l1, l2)
  return (lighter + 0.05) / (darker + 0.05)
}

function extractColors() {
  const content = fs.readFileSync(tokensPath, 'utf-8')
  const colors = new Map()
  // Solo extraer el bloque LIGHT (antes de /* DARK */)
  const lightContent = content.split('/* DARK */')[0]
  const regex = /--color-([\w-]+):\s*(#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3})/g
  let match
  while ((match = regex.exec(lightContent)) !== null) {
    colors.set(match[1], match[2])
  }
  return colors
}

function checkContrasts() {
  const colors = extractColors()
  const errors = []
  const warnings = []

  const textOnBgPairs = [
    ['text-primary', 'bg-app'],
    ['text-secondary', 'bg-app'],
    ['text-heading', 'bg-app'],
    ['text-body', 'bg-app'],
    ['text-muted', 'bg-app'],
    ['text-primary', 'bg-surface'],
    ['text-heading', 'bg-surface'],
    ['text-body', 'bg-surface'],
    ['text-muted', 'bg-surface'],
  ]

  for (const [textColor, bgColor] of textOnBgPairs) {
    const tc = colors.get(textColor)
    const bc = colors.get(bgColor)
    if (!tc || !bc) continue

    const ratio = contrastRatio(tc, bc)
    const name = `${textColor} sobre ${bgColor}`

    if (ratio < 3) {
      errors.push(`${name}: ratio ${ratio.toFixed(2)}:1 — INCUMBE WCAG AA (< 3:1)`)
    } else if (ratio < 4.5) {
      warnings.push(`${name}: ratio ${ratio.toFixed(2)}:1 — solo AA para texto grande (< 4.5:1)`)
    }
  }

  const accentEntries = [...colors.entries()].filter(([name]) => name.endsWith('-accent'))
  for (const [name, accent] of accentEntries) {
    const bgApp = colors.get('bg-app')
    if (!bgApp) continue

    const ratio = contrastRatio(accent, bgApp)
    if (ratio < 3) {
      errors.push(`${name} sobre bg-app: ratio ${ratio.toFixed(2)}:1 — INCUMBE WCAG (< 3:1)`)
    }
  }

  console.log('=== WCAG Contrast Checker ===')
  console.log(`Colores analizados: ${colors.size}`)
  console.log(`Errores: ${errors.length}`)
  console.log(`Warnings: ${warnings.length}`)
  console.log('')

  if (errors.length > 0) {
    console.log('❌ ERRORES:')
    errors.forEach((e) => console.log(`  - ${e}`))
  }

  if (warnings.length > 0) {
    console.log('⚠️  WARNINGS:')
    warnings.forEach((w) => console.log(`  - ${w}`))
  }

  if (errors.length === 0 && warnings.length === 0) {
    console.log('✅ Todos los contrastes cumplen WCAG 2.1')
  }

  console.log('')

  if (errors.length > 0) {
    process.exit(1)
  }
}

checkContrasts()
