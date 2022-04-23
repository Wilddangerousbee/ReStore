import React from "react";

const HomePage = React.lazy(() => import("./home-page/home-page"))
const CardPage = React.lazy(() => import("./cart-page/cart-page"));
const PageNotFound = React.lazy(() => import("./page-not-found/page-not-found"));
const ItemPage = React.lazy(() => import("./item-page/item-page"));

export { CardPage, HomePage, PageNotFound, ItemPage }