import { Dispatch } from "react";
import { useDispatch } from "react-redux"
import { SearchAction, setNewSearch } from "../../types";

const updateSearch = (newSearch : string) => {
    return (dispatch: Dispatch<SearchAction>) => {
        dispatch(setNewSearch(newSearch));
    }
}

export { updateSearch }