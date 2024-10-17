// ini halaman untuk mengatur router

import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/homepage";
import NewsData from "../pages/news";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/news",
    element: <NewsData />,
  },
]);