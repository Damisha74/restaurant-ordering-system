// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route
          path="/menu/:category"
          element={<Menu />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App


