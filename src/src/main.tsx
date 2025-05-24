import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './App'
import { Use } from './pages/docs'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/use" element={<Use />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
