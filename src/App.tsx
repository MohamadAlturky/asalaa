import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AsalaMuseumPage } from './pages/AsalaMuseumPage'
import { ExploreSyriaPage } from './pages/ExploreSyriaPage'
import { HomePage } from './pages/HomePage'
import { ProductDetailPage } from './pages/ProductDetailPage'
import { ProductsIndexPage } from './pages/ProductsIndexPage'
import { ProfilePage } from './pages/ProfilePage'
import { ProvidersPage } from './pages/ProvidersPage'

function App() {
  return (
    <BrowserRouter basename="/asalaa">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore-syria" element={<ExploreSyriaPage />} />
        <Route path="/museum" element={<AsalaMuseumPage />} />
        <Route path="/products" element={<ProductsIndexPage />} />
        <Route path="/products/:slug" element={<ProductDetailPage />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
        <Route path="/providers" element={<ProvidersPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
