import App from "../App";
import { lazy } from "react";
import { useRoutes, Navigate } from "react-router-dom";
const Discover = lazy(() => import("../pages/discover"));
const Friend = lazy(() => import("../pages/friend"));
const Profile = lazy(() => import("../pages/profile"));
const Search = lazy(() => import("../pages/search"));
const Songs = lazy(() => import("../pages/discover/c-pages/songs"));
const Recommend = lazy(() => import("../pages/discover/c-pages/recommend"));
const Ranking = lazy(() => import("../pages/discover/c-pages/ranking"));
const Djradio = lazy(() => import("../pages/discover/c-pages/djradio"));
const Artist = lazy(() => import("../pages/discover/c-pages/artist"));
const Album = lazy(() => import("../pages/discover/c-pages/album"));
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
        {
          path: "search/:keyword",
          element: <Search />,
        },
      ],
    },
  ]);
};

export default Router;
