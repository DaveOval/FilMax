import React from "react";
import { useState } from 'react'
import './App.css'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homePage'
import Footer from "./components/Footer";
import Error from "./pages/error404";


function App() {

  return (
    <Router>

      <Routes>
        <Route path="*" element={<HomePage/>} />
        {/* <Route path="/*" element={<Error/>} /> */}
      </Routes>

      <Footer/>

    </Router>

  )
}

export default App
