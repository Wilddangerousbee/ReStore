import React, { FC, Fragment } from "react";

import { Book } from "../../types/types";
import BookListItem from "../book-list-item/book-list-item";

import '@testing-library/jest-dom/extend-expect';

interface BookListProps {
    books : Book[]
}

const BookList : FC<BookListProps> = ({books}) => {
    return (
        <Fragment>
            {books.map((book) => <BookListItem {...book} />)}
        </Fragment>
    )
}

export default BookList;