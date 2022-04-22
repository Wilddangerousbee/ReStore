import React, { FC } from "react";
import { Book } from "../../types";


const BookListItem : FC<Book> = ({title, author, imageLink}) => {

    return (
        <li>
            <img src={imageLink}/>
            <p>{title}</p>
            <p>{author}</p>
        </li>
    );
}

export default BookListItem;