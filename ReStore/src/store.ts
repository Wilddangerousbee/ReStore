import { combineReducers, createStore } from "redux";

import { BooksReducer } from "./reducers/reducers";

const rootReducer = combineReducers({
    books: BooksReducer
});

const store = createStore(rootReducer);

type RootType = ReturnType<typeof rootReducer>

export default store;

export type {RootType}