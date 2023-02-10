import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import CharacterPage from './pages/CharacterPage'
import EpisodePage from "./pages/EpisodePage"
import LocationPage from "./pages/LocationPage"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route path='/' element={App} />
      <Route path='/CharacterPage' element={CharacterPage} />
      <Route path='/EpisodePage' element={EpisodePage} />
      <Route path='/LocationPage' element={LocationPage} />
    </Routes>
  </BrowserRouter>,
)
