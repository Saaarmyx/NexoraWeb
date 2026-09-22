import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(__dirname, '..')
const distFonts = path.resolve(projectRoot, 'dist/fonts')
const fontSet = process.env.VITE_FONT_SET || 'pro'

/**
 * Post-build: elimina las fuentes del kit no seleccionado.
 * Si VITE_FONT_SET=open, elimina dist/fonts/pro/ y mantiene dist/fonts/open/.
 * Si VITE_FONT_SET=pro (o no definido), elimina dist/fonts/open/ y mantiene dist/fonts/pro/.
 */
function cleanDistFonts() {
  if (!fs.existsSync(distFonts)) {
    console.log('[postbuild-fonts] dist/fonts/ no existe, nada que limpiar.')
    return
  }

  const removeDir = fontSet === 'open'
    ? path.join(distFonts, 'pro')
    : path.join(distFonts, 'open')

  if (fs.existsSync(removeDir)) {
    fs.rmSync(removeDir, { recursive: true, force: true })
    console.log(`[postbuild-fonts] Eliminado dist/fonts/${fontSet === 'open' ? 'pro' : 'open'}/`)
  } else {
    console.log(`[postbuild-fonts] dist/fonts/${fontSet === 'open' ? 'pro' : 'open'}/ no existe.`)
  }
}

cleanDistFonts()
