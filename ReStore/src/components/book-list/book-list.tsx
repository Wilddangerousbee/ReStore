import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";

import { connect } from "react-redux";
import { useAction } from "../../hooks/useActions";
import useDebounce from "../../hooks/useDebounce";
import { useSelectionType } from "../../hooks/useSelectionTyped";

import BookListItem from "../book-list-item";
import Spinner from "../spinner";

import "./index.css"

const BookList : FC = () => {
    const { error, loading, books } = useSelectionType(state => state.books);
    const { searchString, prevSearchString } = useSelectionType(state => state.search);
    const { updateSearch } = useAction();

    const fetchBooks = useDebounce(useAction().fetchBooks, 1000);

    useMemo(() => {
        if (prevSearchString !== searchString) {
            fetchBooks(searchString);   
        }
        return updateSearch(searchString);
    }, [searchString])

    if (loading){
        return <Spinner/>
    }

    if (error) {
        return <h1>Ошибка загрузки данных</h1>
    }

    return (
        <div className="book-list d-flex align-content-sm-around flex-wrap">
            {books.map((book, index) => <BookListItem id={index} {...book} />)}
        </div>
    )
}

export default BookList;