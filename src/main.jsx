import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Home from "./Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./Component/Pages/About/About.jsx";
import ProjectDetails from "./Component/Pages/ProjectDetails/ProjectDetails.jsx";
import Work from "./Component/Pages/Work/Work.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "project-details/:id",
    Component: ProjectDetails,
    loader: () => fetch("/data/data.json"),
  },
  {
    path: "work",
    Component: Work,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <Home />
    </RouterProvider>
  </StrictMode>
);
