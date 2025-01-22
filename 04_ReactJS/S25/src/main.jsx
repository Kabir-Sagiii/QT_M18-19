import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import mystore from "./store/Store";
ReactDOM.render(
  <BrowserRouter>
    <Provider store={mystore}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
