import React, { FC, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useSelectionType } from "../../../hooks/useSelectionTyped";
import BookListItem from "../../book-list-item";

import "./item-page.css"

const ItemPage : FC = () => {
    const {books} = useSelectionType(state => state.books);
    const { id } = useParams();

    return (
        <Fragment>
        <div className="root-block">
            <img src={books[Number(id)].imageLink}/>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{books[Number(id)].author}</li> 
                <li className="list-group-item">{books[Number(id)].title}</li>
                <li 
                    className="list-group-item">
                    {`Сategories: ${books[Number(id)].categories}`}
                </li>
            </ul>
        </div>
        <div className="discription">
            <p >{books[Number(id)].description}</p>
        </div>
        </Fragment>
    )
}

export default ItemPage