import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Home from "./Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./About.jsx";

const router = createBrowserRouter([
  {
    path: "/About",
    Component: About,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <Home />
    </RouterProvider>
  </StrictMode>
);
