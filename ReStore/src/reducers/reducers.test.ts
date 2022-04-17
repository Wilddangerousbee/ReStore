import { createStore } from "redux";
import { BooksAction } from "../actions";
import { BooksReducer } from "./reducers";

describe("test BooksReducer", () => {
    test('BOOKS_LOADED', () => {  
        const store = createStore(BooksReducer);
        const action : BooksAction = {
            type: "BOOKS_LOADED",
            payload: [{
              title: "Harry Potter",
              author: "J. Rouling"  
            }]
        }

        store.dispatch(action);

        expect(store.getState().books).toEqual([{
            title: "Harry Potter",
            author: "J. Rouling"  
          }]);
    })

    test('Initial store', () => {  
        const store = createStore(BooksReducer);

        expect(store.getState().books).toEqual([]);
    })
})