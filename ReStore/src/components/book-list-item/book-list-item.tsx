import React, { FC, useState } from "react";
import { Book } from "../../types";

import "./book-list-item.css"

const BookListItem : FC<Book> = ({title, author, imageLink}) => {
    const [className, setClassName] = useState("book-list-item");

    const addShadow = () => {
        setClassName("book-list-item shadow-lg bg-white rounded");
    }

    const returnUsualClass = () => {
        setClassName("book-list-item")
    }

    return (
        <div 
            onMouseOver={addShadow} 
            onMouseOut = {returnUsualClass}
            className={className}
        >
                <img className="image" src={imageLink}/>
                <p className="title">{title}</p>
                <p className="author">{author}</p>
                <button className="buy btn btn-primary btn-md">Купить</button>
        </div>
    );
}

export default BookListItem;