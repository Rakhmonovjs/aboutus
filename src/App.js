import React from "react";
import { BrowserRouter, Route,  Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import './style/global.css'
import Home from "./Home";
import Detail from "./Accaunt/Details/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes><Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/detail" element={<Detail />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
