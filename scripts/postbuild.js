import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

const clientDist = path.resolve(root, 'dist/client')
const indexHtml = path.resolve(clientDist, 'index.html')
const templateHtml = path.resolve(clientDist, 'template.html')

if (fs.existsSync(indexHtml)) {
  fs.renameSync(indexHtml, templateHtml)
  console.log('Renamed index.html to template.html for SSR')
} else {
  console.log('index.html not found, skipping rename')
}
