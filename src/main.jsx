import React from "react";
import ReactDOM from "react-dom/client";
import "modern-normalize";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import HomePage from "./pages/HomePage/HomePage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <HomePage />
  </Provider>
);
