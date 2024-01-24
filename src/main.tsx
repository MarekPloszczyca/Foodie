import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Routes/App.tsx";
import About from "./Routes/AboutPage.tsx";
import MenuPage from "./Routes/Menu.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReservationPage from "./Routes/ReservationPage.tsx";
import Team from "./Routes/Team.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  { path: "/menu", element: <MenuPage /> },
  { path: "/reservation", element: <ReservationPage /> },
  { path: "/team", element: <Team /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
