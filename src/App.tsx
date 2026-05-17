import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ExploreSyriaPage } from './pages/ExploreSyriaPage'
import { HomePage } from './pages/HomePage'
import { ProductDetailPage } from './pages/ProductDetailPage'
import { ProductsIndexPage } from './pages/ProductsIndexPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore-syria" element={<ExploreSyriaPage />} />
        <Route path="/products" element={<ProductsIndexPage />} />
        <Route path="/products/:slug" element={<ProductDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
