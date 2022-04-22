import React, { FC, Fragment } from "react";
import { Book } from "../../types";


const BookListItem : FC<Book> = ({title, author}) => {

    return (
        <li>
            <span>{title}</span>
            <span>{author}</span>
        </li>
    );
}

export default BookListItem;