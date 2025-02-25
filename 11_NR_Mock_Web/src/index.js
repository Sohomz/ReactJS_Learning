import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import ResturantMenu from "./components/ResturantMenu";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Body />} />
        <Route path="/About" element={<About />} />
        <Route path="/resturants/:resId" element={<ResturantMenu />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </Router>
);
