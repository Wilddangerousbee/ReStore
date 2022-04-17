import { BooksAction } from "../actions";

interface BooksState {
    books: Array<string>
};

const initialState : BooksState = {
    books: []
}

const BooksReducer = (state = initialState, action: BooksAction) : BooksState => {
    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                books: action.payload
            };
    
        default:
            return state;
    }
}

export type {BooksState}

export {BooksReducer, initialState}