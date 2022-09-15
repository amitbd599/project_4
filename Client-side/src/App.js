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
import Contact from "./Page/Contact";
import LoginPage from "./Dashboard/Pages/LoginPage";
import DashboardPage from "./Dashboard/Pages/DashboardPage";
import CreateNewPostPage from "./Dashboard/Pages/CreateNewPostPage";
import AllPost from "./Dashboard/Pages/AllPost";
import PostEditPage from "./Dashboard/Pages/PostEditPage";
import CreateProjectPage from "./Dashboard/Pages/CreateProjectPage";
import ProjectEditPage from "./Dashboard/Pages/ProjectEditPage";
import AllProjectPage from "./Dashboard/Pages/AllProjectPage";
import UserPage from "./Dashboard/Pages/UserPage";
import CommentPage from "./Dashboard/Pages/CommentPage";
import { getToken } from "./Helper/SessionHelper";
import Loader from "./Dashboard/MasterLayout/Loader";
import { Provider } from "react-redux";
import store from "./Redux/Store/Store";
import AllMassage from "./Dashboard/Pages/AllMassage";
import SingleMassagePage from "./Dashboard/Pages/SingleMassagePage";
export default function App() {
  if (!getToken()) {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <PageScrollTop />
          <ScrollToTop smooth />
          <Routes>
            <Route path="/" exact element={<DigitalCleaningService />} />
            <Route path="/about-us" exact element={<AboutUs />} />
            <Route path="/service" exact element={<Service />} />
            <Route path="/service-details" exact element={<ServiceDetails />} />
            <Route path="/blog" exact element={<Blog />} />
            <Route path="/blog-details/:id" exact element={<BlogDetails />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/project" exact element={<Project />} />
            <Route
              path="/project-details/:id"
              exact
              element={<ProjectDetails />}
            />
            <Route path="/team" exact element={<Team />} />
            <Route path="/gallery" exact element={<Gallery />} />
            <Route path="/button" exact element={<Button />} />
            <Route path="/video-popup" exact element={<Video_PopUp />} />
            <Route path="/progressbar" exact element={<Progressbar />} />
            <Route path="/counter" exact element={<Counter />} />

            <Route path="/login" exact element={<LoginPage />} />
            <Route path="*" exact element={<Error404 />} />
          </Routes>
          <Loader />
        </BrowserRouter>
      </Provider>
    );
  } else {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <PageScrollTop />
          <ScrollToTop smooth />
          <Routes>
            <Route path="/" exact element={<DigitalCleaningService />} />
            <Route path="/about-us" exact element={<AboutUs />} />
            <Route path="/service" exact element={<Service />} />
            <Route path="/service-details" exact element={<ServiceDetails />} />
            <Route path="/blog" exact element={<Blog />} />
            <Route path="/blog-details/:id" exact element={<BlogDetails />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/project" exact element={<Project />} />
            <Route
              path="/project-details/:id"
              exact
              element={<ProjectDetails />}
            />
            <Route path="/team" exact element={<Team />} />
            <Route path="/gallery" exact element={<Gallery />} />
            <Route path="/button" exact element={<Button />} />
            <Route path="/video-popup" exact element={<Video_PopUp />} />
            <Route path="/progressbar" exact element={<Progressbar />} />
            <Route path="/counter" exact element={<Counter />} />

            <Route path="/login" exact element={<LoginPage />} />
            <Route path="/dashboard" exact element={<DashboardPage />} />
            <Route path="/create-new" exact element={<CreateNewPostPage />} />
            <Route path="/edit-post/:id" exact element={<PostEditPage />} />
            <Route path="/all-post" exact element={<AllPost />} />
            <Route
              path="/create-project"
              exact
              element={<CreateProjectPage />}
            />
            <Route
              path="/edit-project/:id"
              exact
              element={<ProjectEditPage />}
            />
            <Route path="/all-project" exact element={<AllProjectPage />} />
            <Route path="/all-user" exact element={<UserPage />} />
            <Route path="/comment" exact element={<CommentPage />} />
            <Route path="/massage" exact element={<AllMassage />} />
            <Route
              path="/single-massage/:id"
              exact
              element={<SingleMassagePage />}
            />

            <Route path="*" exact element={<Error404 />} />
          </Routes>
          <Loader />
        </BrowserRouter>
      </Provider>
    );
  }
}
