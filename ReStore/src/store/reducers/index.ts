import { combineReducers } from "redux";
import { BooksReducer } from "./reducers";
import { SearchReducer } from "./search";

const rootReducer = combineReducers({
    books: BooksReducer, 
    search: SearchReducer,
});

export default rootReducer