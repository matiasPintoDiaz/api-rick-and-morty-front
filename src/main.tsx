import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import NavBar from "./components/NavBar/NavBar";
import CharacterPage from './pages/CharacterPage'
import EpisodePage from "./pages/EpisodePage"
import LocationPage from "./pages/LocationPage"
import NotFoundPage from "./pages/NotFoundPage"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/characters' element={<CharacterPage />} />
      <Route path='/episodes' element={<EpisodePage />} />
      <Route path='/locations' element={<LocationPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>,
)
