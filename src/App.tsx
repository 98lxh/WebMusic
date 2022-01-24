import React from "react";
import GlobalHeader from "./components/GlobarHeader";
import MuiscFooter from "./components/GlobarFooter";
import { Outlet } from "react-router";
const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalHeader />
      <Outlet />
      <MuiscFooter />
    </div>
  );
};

export default App;
