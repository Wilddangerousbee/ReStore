import { ActionBook, booksActionTypes, BooksState } from './../types/Book'

const initialState : BooksState = {
    books: [], 
    loading: true,
    error: null
}

const BooksReducer = (state = initialState, action: booksActionTypes) : BooksState => {
    switch (action.type) {
        case ActionBook.BOOKS_LOADING:
            return {
                books: [],
                loading: true,
                error: null
            };
        
        case ActionBook.BOOKS_LOADED:
            return {
                books: action.payload,
                loading: false,
                error: null
            };
        case ActionBook.BOOKS_ERROR:
            return {
                books: [],
                loading: false, 
                error: action.payload    
            }
        default:
            return state;
    }
}

export type {BooksState}

export {BooksReducer}