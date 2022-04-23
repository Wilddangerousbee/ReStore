import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { useAction } from "../../hooks/useActions";
import { Book } from "../../types";


import "./book-list-item.css"
interface IBookListItem extends Book {
    id: number,
} 

const BookListItem : FC<IBookListItem> = (book) => {
    const {id, title, author, imageLink} = book;
    const [className, setClassName] = useState("book-list-item");
    const { addBook } = useAction();



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
        <Link className="link-book" to={`book/${id}`}>
                    <img className="image" src={imageLink}/>
                    <p className="title">{title}</p>
                    {<p className="author">{author || "Без автора"}</p>}
        </Link>
                    <button 
                       onClick={() => addBook(book)}
                       className="buy btn btn-primary btn-md"
                    >
                        Купить
                    </button>
        </div>
    );
}

export default React.memo(BookListItem);