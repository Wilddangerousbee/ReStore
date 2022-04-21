import { combineReducers } from "redux";
import { BooksReducer } from "./reducers";

const rootReducer = combineReducers({
    books: BooksReducer
});

export default rootReducer