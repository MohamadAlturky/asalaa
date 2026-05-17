import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ExploreSyriaPage } from './pages/ExploreSyriaPage'
import { HomePage } from './pages/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore-syria" element={<ExploreSyriaPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
