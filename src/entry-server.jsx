import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'

import App from './App'

import './styles/base.css'
import './styles/motion.css'
import './styles/responsive.css'

import { getProducts } from './features/products'

let products = []

getProducts().then((p) => {
  products = p
  globalThis.__NEXORA_PRODUCTS__ = products
})

/**
 * Renderiza la app a string para prerender/SSR
 * @param {string} url - URL a renderizar
 * @param {Object} options - { helmetContext }
 * @returns {Promise<string>} HTML string
 */
export default async function renderApp(url, { helmetContext = {} } = {}) {
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  )

  return html
}