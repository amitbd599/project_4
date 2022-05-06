import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DigitalCleaningService from "./home/DigitalCleaningService";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs from "./Page/AboutUs";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/" exact
          element={<DigitalCleaningService />} 
        />
        <Route
          path="/about-us" exact 
          element={<AboutUs />} 
        />
      </Routes>
    </BrowserRouter>
  );
}
