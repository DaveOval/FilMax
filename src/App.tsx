import React from "react";
import { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import Footer from "./components/Footer";
import ErrorPage from "./pages/ErrorPage";
import Main from "./pages/main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/main" element={<Main/>} />

        <Route path="/error" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
