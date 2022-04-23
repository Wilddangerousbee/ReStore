import { combineReducers } from "redux";
import BasketReducer from "./basket";
import { BooksReducer } from "./reducers";
import { SearchReducer } from "./search";

const rootReducer = combineReducers({
    books: BooksReducer, 
    search: SearchReducer,
    basket: BasketReducer,
});

export default rootReducer