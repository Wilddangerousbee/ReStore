import React, {FC} from "react";
import { Route, Routes } from "react-router-dom";
import { CardPage, HomePage, PageNotFound } from "../pages";
import ItemPage from "../pages/item-page/item-page";


const App:FC = () => {

    return (
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/carts" element={<CardPage/>} />
          <Route path="/book/:id" element={<ItemPage />}/>
          <Route path="*" element={<PageNotFound /> } />
        </Routes>
    );
}

export default App