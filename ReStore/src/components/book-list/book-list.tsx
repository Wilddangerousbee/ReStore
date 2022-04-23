import React, { FC, useEffect, useState } from "react";

import { connect } from "react-redux";
import { useAction } from "../../hooks/useActions";
import { useSelectionType } from "../../hooks/useSelectionTyped";

import { BookListProps } from "../../types";
import BookListItem from "../book-list-item";
import Spinner from "../spinner";

import "./index.css"

const BookList : FC<BookListProps> = () => {
    const {error, loading, books} = useSelectionType(state => state.books);
    const {searchString} = useSelectionType(state => state.search);

    const { fetchBooks } = useAction();

    useEffect(() => {
        fetchBooks(searchString);
    }, [searchString])
    
    if (loading){
        return <Spinner/>
    }

    if (error) {
        return <h1>Ошибка загрузки данных</h1>
    }

    return (
        <div className=".book-list d-flex align-content-sm-around flex-wrap">
            {books.map((book) => <BookListItem {...book} />)}
        </div>
    )
}

const mapStateToProps = (books : BookListProps) => {
    return books
}

export default connect(mapStateToProps)(BookList);