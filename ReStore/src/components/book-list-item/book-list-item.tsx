import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Book } from "../../types";


import "./book-list-item.css"
interface IBookListItem extends Book {
    id: number,
} 

const BookListItem : FC<IBookListItem> = ({id, title, author, imageLink}) => {
    const [className, setClassName] = useState("book-list-item");

    const addShadow = () => {
        setClassName("book-list-item shadow-lg bg-white rounded");
    }

    const returnUsualClass = () => {
        setClassName("book-list-item")
    }

    return (
        <Link className="link-book" to={`book/${id}`}>
            <div 
                onMouseOver={addShadow} 
                onMouseOut = {returnUsualClass}
                className={className}
            >
                    <img className="image" src={imageLink}/>
                    <p className="title">{title}</p>
                    {<p className="author">{author || "Без автора"}</p>}
                    <button className="buy btn btn-primary btn-md">Купить</button>
            </div>
        </Link>
    );
}

export default React.memo(BookListItem);