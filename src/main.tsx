import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './App'
import { Ts } from './pages/typescript'
import { Cpp } from './pages/cpp'
import { Assembly } from './pages/assembly'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/typescript" element={<Ts />}/>
        <Route path="/pages/cpp" element={<Cpp />}/>
        <Route path="/pages/assembly" element={<Assembly />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
