import React, { FC, Fragment, useEffect, useState } from "react";

import { connect } from "react-redux";

import { Book } from "../../types/Book";
import BookListItem from "../book-list-item/book-list-item";
import ServiceApi from "../service/bookstore-service-context";
interface BookListProps {
    books : Book[]
}

const BookList : FC<BookListProps> = ({books}) => {
    const [hi, setHi] = useState();

    useEffect(() => {
        fetch("https://swapi.dev/api/planets/1/")
            .then(response => response.json())
            .then(data => setHi(data.name))
    }, [books])
    
    return (
        <Fragment>
            <h1>{hi}</h1>
            {books.map((book) => <BookListItem {...book} />)}
        </Fragment>
    )
}

const mapStateToProps = (books : BookListProps) => {
    return books
}

export default connect(mapStateToProps)(BookList);