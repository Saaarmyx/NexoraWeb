import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Products from '../pages/Products/Products'
import Ecosystem from '../pages/Ecosystem/Ecosystem'
import Downloads from '../pages/Downloads/Downloads'
import NCodePage from '../features/ncode/NCodePage'

import ComingSoon from '../pages/ComingSoon/ComingSoon'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/ecosystem" element={<Ecosystem />} />
      <Route path="/downloads" element={<Downloads />} />
      <Route path="/products/ncode" element={<NCodePage />} />
      <Route path="*" element={<ComingSoon />} />
    </Routes>
  )
}

export default AppRoutes
