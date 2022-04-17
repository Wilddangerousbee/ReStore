import { createStore } from "redux";

import { BooksReducer } from "./reducers/reducers";

const store = createStore(BooksReducer);

export default store;