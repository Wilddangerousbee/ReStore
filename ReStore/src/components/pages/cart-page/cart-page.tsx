import React, { FC } from "react";
import { useSelectionType } from "../../../hooks/useSelectionTyped";

const CardPage:FC = () => {
    const { books } = useSelectionType(state => state.basket);

    return (
        <React.Fragment>
            <h1 className="Medium">My Basket</h1>
            {books.map((el) => <img src={el.imageLink}/>) }
        </React.Fragment>
    )
}

export default CardPage;