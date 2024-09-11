import { useState } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import ShimmerUI from './ShimmerUI'
import { Outlet } from 'react-router-dom'
import ThemeContext from './ThemeContext'

//import './App.css'

function App() {
  

  return (
    <>
    <ThemeContext>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </ThemeContext>
    </>
  )
}

export default App
