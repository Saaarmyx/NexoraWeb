import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import Ecosystem from './pages/Ecosystem/Ecosystem'
import About from './pages/About/About'
import ComingSoon from './pages/ComingSoon/ComingSoon'
import NCode from './pages/NCode/NCode'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          {/* <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/about" element={<About />} /> */}
          <Route path="/products/ncode" element={<NCode />} />
          <Route path="*" element={<ComingSoon />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  )
}

export default App
