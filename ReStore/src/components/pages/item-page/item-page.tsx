import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { useSelectionType } from "../../../hooks/useSelectionTyped";
import BookListItem from "../../book-list-item";

const ItemPage : FC = () => {
    const {books} = useSelectionType(state => state.books);
    const { id } = useParams();

    console.log(books)

    return (
        <BookListItem id={Number(id)} {...books[Number(id)]}/>
    )
}

export default ItemPage