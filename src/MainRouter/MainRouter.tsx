import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Home";
import About from "../About";
import Project from "../Project";
import Notfound from "../Notfound";
import Contact from "../Contact";

const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "project",
        element: <Project />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "notfound",
        element: <Notfound />,
      },
    ],
  },
]);
export default mainRouter;
