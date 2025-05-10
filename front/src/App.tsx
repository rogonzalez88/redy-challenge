import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Add from './pages/Add'
import Navbar from './components/NavBar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App