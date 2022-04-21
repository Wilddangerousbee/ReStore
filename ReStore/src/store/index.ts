import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

type RootType = ReturnType<typeof rootReducer>

export default store;

export type {RootType}