import React from "react";
import { BrowserRouter, Route,  Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import './style/global.css'
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes><Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
