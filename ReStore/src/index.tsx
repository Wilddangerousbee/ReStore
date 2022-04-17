import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import ErrorBoundary from "./components/error-boundry/error-boundry";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
)