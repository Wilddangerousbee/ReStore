import React, { FC, useMemo } from "react";

import { useAction } from "../../hooks/useActions";
import useDebounce from "../../hooks/useDebounce";
import useSearch from "../../hooks/useSearch";
import { useSelectionType } from "../../hooks/useSelectionTyped";

import BookListItem from "../book-list-item";
import Spinner from "../spinner";

import "./index.css"

const BookList : FC = () => {
    const { error, loading, books } = useSelectionType(state => state.books);
    useSearch()

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