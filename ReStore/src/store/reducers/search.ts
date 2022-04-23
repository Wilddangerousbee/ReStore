import { SearchAction, SearchActions, SearchState } from "../../types";

const initioaState : SearchState = {
    searchString: "",
    prevSearchString: ""
}

const SearchReducer = (state : SearchState = initioaState, action :  SearchAction) : SearchState => {
    switch (action.type) {
        case SearchActions.NEW_SEARCH:
            return {
                searchString: action.payload,
                prevSearchString : state.searchString
            }
    
        default:
            return state;
           
    }
}

export { SearchReducer }