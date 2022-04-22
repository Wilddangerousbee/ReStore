import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import * as Actions from "../store/actions/action-books";
import { booksLoaded, booksLoading, booksError } from "../types";

const useAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(Actions, dispatch);
}

export { useAction } 