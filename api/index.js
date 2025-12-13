import fs from 'fs'
import path from 'path'

export default async function handler(req, res) {
  const isProduction = process.env.NODE_ENV === 'production'
  const root = process.cwd()

  try {
    const template = fs.readFileSync(path.resolve(root, 'dist/client/index.html'), 'utf-8')
    const manifest = fs.readFileSync(path.resolve(root, 'dist/client/.vite/ssr-manifest.json'), 'utf-8')

    // Import the server entry. Note: In a Vercel function, we import the built server entry.
    // We need to use a relative path from this file location after build? 
    // Or absolute path from root? 
    // Vercel bundles required files.
    // The build output for server is in dist/server/entry-server.js
    const render = (await import(path.resolve(root, 'dist/server/entry-server.js'))).render

    const appHtml = await render(req.url, manifest)

    const html = template.replace(`<!--app-html-->`, appHtml)

    res.status(200).setHeader('Content-Type', 'text/html').send(html)
  } catch (e) {
    console.error(e)
    res.status(500).end(e.message)
  }
}
