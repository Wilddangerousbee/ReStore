import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import ErrorBoundary from "./components/error-boundry/error-boundry";
import Spinner from './components/spinner/spinner'
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import { Provider } from "react-redux";

import store from "./store";
import PageNotFound from "./page-not-found/page-not-found";

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="*" element={<PageNotFound /> } />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
)