import App from "../App";
import { lazy, Suspense } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import Album from "../pages/discover/c-pages/album";
import Artist from "../pages/discover/c-pages/artist";
import Djradio from "../pages/discover/c-pages/djradio";
import Ranking from "../pages/discover/c-pages/ranking";
import Recommend from "../pages/discover/c-pages/recommend";
import Songs from "../pages/discover/c-pages/songs";
import Search from "../pages/search";
import GolbalLoading from "../components/GlobalLoading";

const Discover = lazy(() => import("../pages/discover"));
const Friend = lazy(() => import("../pages/friend"));
const Profile = lazy(() => import("../pages/profile"));

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
          element: (
            <Suspense fallback={<GolbalLoading />}>
              <Discover />
            </Suspense>
          ),
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
          element: (
            <Suspense fallback={<GolbalLoading />}>
              <Profile />
            </Suspense>
          ),
        },
        {
          path: "friends",
          element: (
            <Suspense fallback={<GolbalLoading />}>
              <Friend />
            </Suspense>
          ),
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
