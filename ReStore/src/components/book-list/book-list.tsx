import React, { FC } from "react";

import { connect } from "react-redux";
import { useSelectionType } from "../../hooks/useSelectionTyped";

import { BookListProps } from "../../types";
import BookListItem from "../book-list-item";

const BookList : FC<BookListProps> = () => {
    const {books} = useSelectionType(state => state.books);
    
    return (
        <div>
            {books.map((book) => <BookListItem {...book} />)}
        </div>
    )
}

const mapStateToProps = (books : BookListProps) => {
    return books
}

export default connect(mapStateToProps)(BookList);