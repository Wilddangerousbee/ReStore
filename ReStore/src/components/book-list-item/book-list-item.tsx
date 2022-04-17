import React, { FC, Fragment } from "react";

import { Book } from "../../types/types";

const BookListItem : FC<Book> = (book:Book) => {
    const {title, author} = book;

    return (
        <Fragment>
            <span>{title}</span>
            <span>{author}</span>
        </Fragment>
    );
}

export default BookListItem;