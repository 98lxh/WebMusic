import ReactDOM from "react-dom";
import Router from "./router";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
