import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DigitalCleaningService from "./home/DigitalCleaningService";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs from "./Page/AboutUs";
import Service from "./Page/Service";
import ServiceDetails from "./Page/ServiceDetails";
import Blog from "./Page/Blog";
import BlogDetails from "./Page/BlogDetails";
import Project from "./Page/Project";
import ProjectDetails from "./Page/ProjectDetails";
import Team from "./Page/Team";
import Error404 from "./Page/Error404";
import PageScrollTop from "./Script/PageScrollTop";
import ScrollToTop from "react-scroll-to-top";
import Gallery from "./Elements/Blocks/Gallery";
import Button from "./Elements/Blocks/Button";
import Video_PopUp from "./Elements/Blocks/Video_PopUp";
import Progressbar from "./Elements/Blocks/Progressbar";
import Counter from "./Elements/Blocks/Counter";
export default function App() {
  return (
    <BrowserRouter>
      <PageScrollTop />
      <ScrollToTop smooth />
      <Routes>
        <Route path="/" exact element={<DigitalCleaningService />} />
        <Route path="/about-us" exact element={<AboutUs />} />
        <Route path="/service" exact element={<Service />} />
        <Route path="/service-details" exact element={<ServiceDetails />} />
        <Route path="/blog" exact element={<Blog />} />
        <Route path="/blog-details" exact element={<BlogDetails />} />
        <Route path="/project" exact element={<Project />} />
        <Route path="/project-details" exact element={<ProjectDetails />} />
        <Route path="/team" exact element={<Team />} />
        <Route path="/gallery" exact element={<Gallery />} />
        <Route path="/button" exact element={<Button />} />
        <Route path="/video-popup" exact element={<Video_PopUp />} />
        <Route path="/progressbar" exact element={<Progressbar />} />
        <Route path="/counter" exact element={<Counter />} />

        <Route path="*" exact element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
