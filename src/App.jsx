import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'

import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import Ecosystem from './pages/Ecosystem/Ecosystem'
import About from './pages/About/About'
import ComingSoon from './pages/ComingSoon/ComingSoon'
import NCode from './pages/NCode/NCode'

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('nexora-theme') || 'light'
  })

  useEffect(() => {
    document.body.dataset.theme = theme
    localStorage.setItem('nexora-theme', theme)
  }, [theme])

  return (
    <BrowserRouter>
      <Header theme={theme} setTheme={setTheme} />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/ncode" element={<NCode />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ComingSoon />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  )
}

export default App
