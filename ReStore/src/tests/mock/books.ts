import { ActionBook, Book, booksActionTypes } from "../../types"

const BooksListTest : booksActionTypes = {
    type: ActionBook.BOOKS_LOADED,
    payload: [{
        title: "Hideo",
        author: "Kodzima",
        imageLink: "a"
    }, {
        title: "Kujo",
        author: "Jotore",
        imageLink: "a",
    }]
}

const BookListTest : Book = {
    title: "Don", 
    author: "Servantes",
    imageLink: "a",
}

const ReducerTest : booksActionTypes = {
    type: ActionBook.BOOKS_LOADED,
    payload: [{
      title: "Harry Potter",
      author: "J. Rouling",
      imageLink: "a",  
    }]
}

export { BooksListTest, BookListTest, ReducerTest }