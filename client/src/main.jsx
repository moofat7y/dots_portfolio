import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";

import { hydrateRoot, createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrateRoot(
    rootElement,
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  );
} else {
  createRoot(rootElement).render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}

// ReactDOM.createRoot(document.getElementById("root")).render(
//   // <React.StrictMode>
//   <Provider store={store}>
//     <App />
//   </Provider>
//   // </React.StrictMode>
// );
