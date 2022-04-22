import { ActionBook, Book, booksActionTypes } from "../../types"

const BooksListTest : booksActionTypes = {
    type: ActionBook.BOOKS_LOADED,
    payload: [{
        title: "Hideo",
        author: "Kodzima"
    }, {
        title: "Kujo",
        author: "Jotore"
    }]
}

const BookListTest : Book = {
    title: "Don", 
    author: "Servantes"
}

const ReducerTest : booksActionTypes = {
    type: ActionBook.BOOKS_LOADED,
    payload: [{
      title: "Harry Potter",
      author: "J. Rouling"  
    }]
}

export { BooksListTest, BookListTest, ReducerTest }