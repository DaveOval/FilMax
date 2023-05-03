import React from "react";
import { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import Footer from "./components/Footer";
import ErrorPage from "./pages/Error/ErrorPage";
import Main from "./pages/Browse";
import Home from "./pages/Home/homePage";
import Movie from "./pages/Movie";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<  Home />} />
        <Route path="/browser" element={<Main/>} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/tv/:id" element={<Movie />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
