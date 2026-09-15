import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Products from '../pages/Products/Products'
import NCodePage from '../features/ncode/NCodePage'
// import About from '../pages/About/About'
// import Ecosystem from '../pages/Ecosystem/Ecosystem'

import ComingSoon from '../pages/ComingSoon/ComingSoon'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/ncode" element={<NCodePage />} />
      {/* <Route path="/ecosystem" element={<Ecosystem />} />
      <Route path="/about" element={<About />} />
      <Route path="/support" element={<Support />} /> */}
      <Route path="*" element={<ComingSoon />} />
    </Routes>
  )
}

export default AppRoutes
