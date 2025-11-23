import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MusicCard from './components/MusicCard.jsx'
import Music from './pages/music.jsx'


const App = () => {
  return (
    <>
    <Routes>
      <Route path="/music" element={<Music/>} />
    </Routes>
      
    </>
  )
}

export default App
