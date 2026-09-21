import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Products from '../pages/Products/Products'
import Ecosystem from '../pages/Ecosystem/Ecosystem'
import Downloads from '../pages/Downloads/Downloads'
import Events from '../pages/Events/Events'
import LegalPage from '../pages/Legal/LegalPage'
import { ProductPage } from '../features/products'

import ComingSoon from '../pages/ComingSoon/ComingSoon'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:slug" element={<ProductPage />} />
      <Route path="/ecosystem" element={<Ecosystem />} />
      <Route path="/downloads" element={<Downloads />} />
      <Route path="/events" element={<Events />} />
      <Route path="/privacy" element={<LegalPage type="privacy" />} />
      <Route path="/accessibility" element={<LegalPage type="accessibility" />} />
      <Route path="/security" element={<LegalPage type="security" />} />
      <Route path="*" element={<ComingSoon />} />
    </Routes>
  )
}

export default AppRoutes
