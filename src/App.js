import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DigitalCleaningService from "./home/DigitalCleaningService";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs from "./Page/AboutUs";
import Service from "./Page/Service";
import ServiceDetails from "./Page/ServiceDetails";
import Blog from "./Page/Blog";
import BlogDetails from "./Page/BlogDetails";
import Project from "./Page/Project";
import ProjectDetails from "./Page/ProjectDetails";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<DigitalCleaningService />} />
        <Route path="/about-us" exact element={<AboutUs />} />
        <Route path="/service" exact element={<Service />} />
        <Route path="/service-details" exact element={<ServiceDetails />} />
        <Route path="/blog" exact element={<Blog />} />
        <Route path="/blog-details" exact element={<BlogDetails />} />
        <Route path="/project" exact element={<Project />} />
        <Route path="/project-details" exact element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
