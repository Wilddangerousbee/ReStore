import React from "react";

const HomePage = React.lazy(() => import("./home-page/home-page"))
const CardPage = React.lazy(() => import("./cart-page/cart-page"));
const PageNotFound = React.lazy(() => import("./page-not-found/page-not-found"));

export { CardPage, HomePage, PageNotFound }