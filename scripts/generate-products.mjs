import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(__dirname, '..')
const contentDir = path.resolve(projectRoot, 'src/features/products/content')
const outputPath = path.resolve(projectRoot, 'src/features/products/data/products-generated.js')

async function generate() {
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.js'))
  const products = []

  for (const file of files) {
    const filePath = path.join(contentDir, file)
    const mod = await import(filePath)
    products.push(mod.default)
  }

  products.sort((a, b) => a.order - b.order)

  const content = `// Generado automáticamente - NO EDITAR MANUALMENTE
// Ejecutar: node scripts/generate-products.mjs

export const products = ${JSON.stringify(products, null, 2)}

export function getProductsSync() {
  return products
}

export async function getProducts() {
  return products
}

export default products
`

  fs.writeFileSync(outputPath, content)
  console.log(`Generated ${outputPath} with ${products.length} products`)
}

generate().catch(console.error)