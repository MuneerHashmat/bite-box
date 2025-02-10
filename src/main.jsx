import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./Index.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux-store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Index />
    </Provider>
  </React.StrictMode>
);
