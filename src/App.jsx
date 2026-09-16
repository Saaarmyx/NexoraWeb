import { useEffect } from 'react'
import { BrowserRouter, useLocation } from 'react-router-dom'

import AppRoutes from './app/routes'
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'

function AppShell() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [location.pathname])

  return (
    <>
      <Header />

      <main key={location.pathname} className="page-transition">
        <AppRoutes />
      </main>

      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}

export default App
