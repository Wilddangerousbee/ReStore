import React, { FC, Fragment } from "react";

import { connect } from "react-redux";

import { Book } from "../../types/types";
import BookListItem from "../book-list-item/book-list-item";
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

const mapStateToProps = (books : BookListProps) => {
    return books
}

export default connect(mapStateToProps)(BookList);