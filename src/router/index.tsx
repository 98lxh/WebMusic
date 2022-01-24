import { Route, BrowserRouter, Routes } from "react-router-dom";
import App from "../App";
import Discover from "../pages/discover";
import Friend from "../pages/friend";
import Profile from "../pages/profile";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="profile" element={<Profile />} />
          <Route path="friends" element={<Friend />} />
          <Route path="discover" element={<Discover />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
