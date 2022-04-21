import React, {FC} from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { useSelectionType } from "../../hooks/useSelectionTyped";
import CardPage from "../../pages/cart-page";
import HomePage from "../../pages/home-page";
import PageNotFound from "../../pages/page-not-found";

const App:FC = () => {

    return (
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/carts" element={<CardPage/>} />
          <Route path="*" element={<PageNotFound /> } />
        </Routes>
    );
}

export default App