import { useState } from 'react'
import { FiCode, FiCloud, FiImage, FiMonitor, FiShare2 } from 'react-icons/fi'

import { products } from '../../features/products'
import Badge from '../../components/atoms/Badge/Badge'
import Button from '../../components/atoms/Button/Button'
import Card from '../../components/atoms/Card/Card'

import './Downloads.css'

const productIcons = {
  cloud: FiCloud,
  ncode: FiCode,
  photos: FiImage,
  os: FiMonitor,
  connect: FiShare2,
}

const downloadLinks = {
  ncode: 'https://github.com/Saaarmyx/NexoraCode/releases',
}

function Downloads() {
  const featuredProducts = products.filter((product) => product.featured)
  const [selectedSlug, setSelectedSlug] = useState(() => featuredProducts[0]?.slug)
  const selectedProduct =
    featuredProducts.find((product) => product.slug === selectedSlug) || featuredProducts[0]
  const SelectedIcon = productIcons[selectedProduct.slug] || FiCloud
  const downloadUrl = downloadLinks[selectedProduct.slug]

  return (
    <section className="section downloads-page">
      <div className="container">
        <Card variant="surface" radius="2xl" className="downloads-community-card">
          <div>
            <h2>QUIERES ESTAR AL DÍA?</h2>
            <p>Únete a la comunidad para conocer nuevas versiones y próximos lanzamientos.</p>
          </div>

          <div className="downloads-community-actions">
            <Button
              href="https://discord.gg/XnMBBBa26k"
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              DISCORD
            </Button>
            <Button
              href="https://t.me/+UvoqqOtxA-03YzE5"
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              TELEGRAM
            </Button>
          </div>
        </Card>
        <nav className="downloads-product-nav" aria-label="Productos Nexora">
          {featuredProducts.map((product) => {
            const Icon = productIcons[product.slug] || FiCloud
            const isSelected = selectedProduct.slug === product.slug

            return (
              <button
                type="button"
                className={`downloads-product-tab ${isSelected ? 'is-selected' : ''}`}
                key={product.slug}
                onClick={() => setSelectedSlug(product.slug)}
                aria-pressed={isSelected}
              >
                <Icon className="downloads-product-tab-icon" aria-hidden="true" />
                <span>{product.name}</span>
              </button>
            )
          })}
        </nav>

        <Card variant="surface" radius="2xl" className="downloads-product-card">
          <div className="downloads-product-card-media">
            <img src={selectedProduct.image} alt={selectedProduct.name} />
          </div>

          <div className="downloads-product-card-content">
            <div className="downloads-product-card-icon">
              <SelectedIcon aria-hidden="true" />
            </div>

            <Badge>{selectedProduct.availability}</Badge>

            <h2>{selectedProduct.name}</h2>

            <p>{selectedProduct.description}</p>

            {downloadUrl ? (
              <Button
                href={downloadUrl}
                variant="primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                DESCARGAR
              </Button>
            ) : (
              <Button variant="secondary" disabled>
                PRÓXIMAMENTE
              </Button>
            )}
          </div>
        </Card>
      </div>
    </section>
  )
}

export default Downloads
