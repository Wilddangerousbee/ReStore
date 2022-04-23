import React, { FC, Fragment } from "react";
import { useAction } from "../../../hooks/useActions";
import { useSelectionType } from "../../../hooks/useSelectionTyped";
import ItemBooks from "../../item-book/item-book";

import "./cart-page.css"

const CardPage:FC = () => {
    const { books } = useSelectionType(state => state.basket);
    const { removeBook } = useAction();

    return (
        <React.Fragment>
            <div className="items">
                <h1 className="my-basket Medium">My Basket</h1>
                {books.map((el) => {
                    return(
                        <Fragment>
                            <ItemBooks {...el}/>
                            <button 
                                onClick={() => removeBook(el)} 
                                className="delete-book btn btn-primary btn-lg"
                            >
                                Удалить Книгу
                            </button>
                        </Fragment>
                    )
                })}
            </div>
        </React.Fragment>
    )
}

export default CardPage;