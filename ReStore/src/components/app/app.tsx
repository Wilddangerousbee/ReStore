import React, {FC} from "react";
import { Route, Routes } from "react-router-dom";
import { CardPage, HomePage, PageNotFound } from "../pages";


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