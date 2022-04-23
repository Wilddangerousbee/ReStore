import { ActionBook, Book, booksActionTypes } from "../../types"

const BooksListTest : booksActionTypes = {
    type: ActionBook.BOOKS_LOADED,
    payload: [{
        title: "Hideo",
        author: "Kodzima",
        imageLink: "a",
        categories: ["a", "a"], 
        description: "a",
    }, {
        title: "Kujo",
        author: "Jotore",
        imageLink: "a",
        categories: ["a", "a"], 
        description: "a",
    }]
}

const BookListTest : Book = {
    title: "Don", 
    author: "Servantes",
    imageLink: "a",
    categories: ["a", "a"], 
    description: "a",
}

const ReducerTest : booksActionTypes = {
    type: ActionBook.BOOKS_LOADED,
    payload: [{
      title: "Harry Potter",
      author: "J. Rouling",
      imageLink: "a",
      categories: ["a", "a"], 
      description: "a",
    }]
}

export { BooksListTest, BookListTest, ReducerTest }