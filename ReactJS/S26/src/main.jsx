import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import mystore from "./store/Store";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={mystore}>
      <App />
    </Provider>
  </BrowserRouter>
);
