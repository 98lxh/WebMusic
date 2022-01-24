import { useRoutes, Navigate } from "react-router-dom";
import App from "../App";
import Discover from "../pages/discover";
import Album from "../pages/discover/c-pages/album";
import Artist from "../pages/discover/c-pages/artist";
import Djradio from "../pages/discover/c-pages/djradio";
import Ranking from "../pages/discover/c-pages/ranking";
import Recommend from "../pages/discover/c-pages/recommend";
import Songs from "../pages/discover/c-pages/songs";
import Friend from "../pages/friend";
import Profile from "../pages/profile";
const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Navigate to="/discover" />,
        },
        {
          path: "discover",
          element: <Discover />,
          children: [
            {
              path: "/discover",
              element: <Navigate to="/discover/recommend" />,
            },
            {
              path: "recommend",
              element: <Recommend />,
            },
            {
              path: "album",
              element: <Album />,
            },
            {
              path: "artist",
              element: <Artist />,
            },
            {
              path: "ranking",
              element: <Ranking />,
            },
            {
              path: "djradio",
              element: <Djradio />,
            },
            {
              path: "songs",
              element: <Songs />,
            },
          ],
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "friends",
          element: <Friend />,
        },
      ],
    },
  ]);
};

export default Router;
