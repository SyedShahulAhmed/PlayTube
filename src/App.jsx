import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Video from './pages/Video'
import { useState } from 'react'
import SideBar from './components/SideBar'
const App = () => {

  const [Show,setShow] = useState(true)

  return (
    <div>
      <NavBar setShow={setShow}/>
      <Routes>
        <Route path='/' element={<Home Show={Show}/>}/>
        <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
      </Routes>
    </div>
  )
}

export default App