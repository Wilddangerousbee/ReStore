enum ActionBook {
    BOOKS_LOADED = "BOOKS_LOADED",
    BOOKS_ERROR = "BOOKS_ERROR",
    BOOKS_LOADING = "BOOKS_LOADING",
}

interface Book {
    title: string,
    author: string,
    imageLink: string,
}

interface BookListProps {
    books : Array<Book>
}

interface BooksState {
    books: Array<Book>, 
    loading: boolean,
    error: null | string
};

interface BooksLoaded {
    type:  ActionBook.BOOKS_LOADED,
    payload: Array<Book>
};

interface BooksLoading {
    type:  ActionBook.BOOKS_LOADING,
};

interface BooksError {
    type:  ActionBook.BOOKS_ERROR,
    payload: string
};

const booksLoaded = (newBooks: Array<Book>) : BooksLoaded => {
    return {
        type: ActionBook.BOOKS_LOADED,
        payload: newBooks
    }
}

const booksLoading = () : BooksLoading => {
    return {
        type: ActionBook.BOOKS_LOADING,
    }
}

const booksError = (errorMessage: string) : BooksError => {
    return {
        type: ActionBook.BOOKS_ERROR,
        payload: errorMessage
    }
}

type booksActionTypes = BooksLoaded | BooksLoading | BooksError 

export { ActionBook, booksError, booksLoading, booksLoaded }
export type { booksActionTypes, BooksState, Book, BookListProps }