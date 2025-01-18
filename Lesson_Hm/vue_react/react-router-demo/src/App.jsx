import { useState } from 'react'
import './App.css'
// import About from './pages/About'
import {
  Outlet,
  NavLink  
} from 'react-router-dom'

function App() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  )
}

export default App
