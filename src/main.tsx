import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18n";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Dashboard, Expenses, Home, NotFound } from "./pages";
import { Sidebar } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
    children: [],
  },
  {
    path: "app",
    element: <Sidebar />,
    children: [
      {
        path: "",
        element: <Navigate to="dashboard" replace />,
        index: true,
      },

      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "expenses",
        element: <Expenses />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
