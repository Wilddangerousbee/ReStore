import { FC } from "react"
import { Book } from "../../types"
import "./item-book.css"

const ItemBooks : FC<Book> = (book) => {
    return (
        <div className="root-block">
            <img src={book.imageLink}/>
            <ul className="list-group list-group-flush">
                <li 
                    className="list-group-item">
                    {`Author: ${book.author}`}
                </li> 
                <li 
                    className="list-group-item">
                    {`Title: ${book.title}`}
                </li>
                <li 
                    className="list-group-item">
                    {`–°ategories: ${book.categories}`}
                </li>
            </ul>
        </div>
    )
}

export default ItemBooks;