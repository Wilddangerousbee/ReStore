import React, { FC, Fragment } from "react";
import { useSelectionType } from "../../hooks/useSelectionTyped";
import store from "../../store";
import { Book } from "../../types/Book";


const BookListItem : FC<Book> = ({title, author}) => {

    return (
        <Fragment>
            <span>{title}</span>
            <span>{author}</span>
        </Fragment>
    );
}

export default BookListItem;