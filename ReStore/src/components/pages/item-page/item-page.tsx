import React, { FC, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useSelectionType } from "../../../hooks/useSelectionTyped";
import BookListItem from "../../book-list-item";
import ItemBooks from "../../item-book/item-book";

import "./item-page.css"

const ItemPage : FC = () => {
    const {books} = useSelectionType(state => state.books);
    const { id } = useParams();

    return (
        <Fragment>
        <ItemBooks {...books[Number(id)]}/>
        <div className="discription">
            <p >{books[Number(id)].description}</p>
        </div>
        </Fragment>
    )
}

export default ItemPage