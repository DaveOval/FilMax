import React from "react";
import { useState } from 'react'
import './App.css'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homePage'


function App() {

  return (
    <Router>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/*" element={<HomePage/>} />
      </Routes>

    </Router>

  )
}

export default App
