import { createStore } from "redux";
import { ActionBook, booksActionTypes } from "../../types";
import { ReducerTest } from "../mock/books";
import  BooksReducer from './../../store/reducers'

describe("test BooksReducer", () => {
    test('BOOKS_LOADED', () => {  
        const store = createStore(BooksReducer);
        store.dispatch(ReducerTest);

        expect(store.getState().books).toEqual(ReducerTest);
    })

    test('Initial store', () => {  
        const store = createStore(BooksReducer);

        expect(store.getState().books).toEqual({"books": [], "error": null, "loading": true});
    })
})