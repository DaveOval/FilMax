import React from "react";
import { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import ErrorPage from "./pages/Error/ErrorPage";
import Main from "./pages/Browse";
import Home from "./pages/Home/homePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/browser" element={<Main/>} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
