import ReactDOM from "react-dom";
import Router from "./router";
import { BrowserRouter } from "react-router-dom";
import "./assets/less/reset.less";
ReactDOM.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
  document.getElementById("root")
);
