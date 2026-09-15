import { BrowserRouter } from 'react-router-dom'

import AppRoutes from './app/routes'
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <AppRoutes />
      </main>

      <Footer />
    </BrowserRouter>
  )
}

export default App
