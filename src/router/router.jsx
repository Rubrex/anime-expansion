import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import TopAnime from "../components/TopAnime";
import TopCharacters from "../components/TopCharacters";
import TopManga from "../components/TopManga";
import TopReviews from "../components/TopReviews";
import Markup from "../layout/Markup";

// Router Definitions Goes Here
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Markup></Markup>,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/topAnime",
        element: <TopAnime></TopAnime>,
        loader: async () => fetch("https://api.jikan.moe/v4/top/anime"),
      },
      {
        path: "/topManga",
        element: <TopManga></TopManga>,
        loader: async () => fetch("https://api.jikan.moe/v4/top/manga"),
      },
      { path: "/topReviews", element: <TopReviews></TopReviews> },
      {
        path: "/topCharacters",
        element: <TopCharacters></TopCharacters>,
        loader: async () => fetch("https://api.jikan.moe/v4/top/characters"),
      },
      { path: "/aboutUs", element: <TopReviews></TopReviews> },
    ],
  },
]);
