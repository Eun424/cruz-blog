import React from "react";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./pages/RootLayout";
import NotFoundPage from "./pages/NotFoundPage";
import AddPage from "./pages/AddPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "blog",
        Component: BlogPage,
      },
      {
        path: "add",
        Component: AddPage,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
