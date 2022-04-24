import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { addShadow, returnUsualClass } from "../../helpers";
import { useAction } from "../../hooks";
import { IBookListItem } from "../../types";

import "./book-list-item.css"


const BookListItem : FC<IBookListItem> = (book) => {
    const {id, title, author, imageLink} = book;
    const [className, setClassName] = useState("book-list-item");
    const { addBook } = useAction();

    return (
        <div 
                onMouseOver={() => addShadow(setClassName)} 
                onMouseOut = {() => returnUsualClass(setClassName)}
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