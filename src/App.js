import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DigitalCleaningService from "./home/DigitalCleaningService";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<DigitalCleaningService />} 
        />
      </Routes>
    </BrowserRouter>
  );
}
