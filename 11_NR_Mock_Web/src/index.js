import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter } from "react-router-dom";
import { Outlet, RouterProvider } from "react-router";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <div className="body-wrapper">
            <Body />
          </div>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/About",
        element: (
          <div className="body-wrapper">
            <About />
          </div>
        ),
        errorElement: <ErrorPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
