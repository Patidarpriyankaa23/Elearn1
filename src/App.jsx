import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='register' element={<Register/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

