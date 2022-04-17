import React, { FC, Fragment } from "react";

import { Book } from "../../types/types";

const BookListItem : FC<Book> = ({title, author}) => {

    return (
        <Fragment>
            <span>{title}</span>
            <span>{author}</span>
        </Fragment>
    );
}

export default BookListItem;