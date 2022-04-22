import React, { FC, useEffect } from "react";

import { connect } from "react-redux";
import { useAction } from "../../hooks/useActions";
import { useSelectionType } from "../../hooks/useSelectionTyped";

import { BookListProps } from "../../types";
import BookListItem from "../book-list-item";
import Spinner from "../spinner";

const BookList : FC<BookListProps> = () => {
    const {error, loading, books} = useSelectionType(state => state.books);

    const { fetchBooks } = useAction();

    useEffect(() => {
        fetchBooks();
    }, [])
    
    if (loading){
        return <Spinner/>
    }

    if (error) {
        return <h1>Ошибка загрузки данных</h1>
    }

    return (
        <ul>
            {books.map((book) => <BookListItem {...book} />)}
        </ul>
    )
}

const mapStateToProps = (books : BookListProps) => {
    return books
}

export default connect(mapStateToProps)(BookList);