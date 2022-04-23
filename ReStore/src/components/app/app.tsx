import React, {FC, Fragment} from "react";
import { Route, Routes } from "react-router-dom";
import Basket from "../basket/basket";
import { CardPage, HomePage, PageNotFound } from "../pages";
import ItemPage from "../pages/item-page/item-page";


const App:FC = () => {

    return (
          <Routes>
            <Route path="/" element={
            <Fragment>
              <Basket/>
              <HomePage/>
            </Fragment>}/>
            <Route path="/carts" element={<CardPage/>} />
            <Route path="/book/:id" element={
            <Fragment>
              <Basket/>
              <ItemPage />
            </Fragment>}/>
            <Route path="*" element={<PageNotFound /> } />
          </Routes>
    );
}

export default App