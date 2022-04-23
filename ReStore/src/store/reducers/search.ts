import { SearchAction, SearchActions, SearchState } from "../../types";

const initioaState : SearchState = {
    searchString: "react",
}

const SearchReducer = (state : SearchState = initioaState, action :  SearchAction) : SearchState => {
    switch (action.type) {
        case SearchActions.NEW_SEARCH:
            return {
                searchString: action.payload,
            }
    
        default:
            return state;
           
    }
}

export { SearchReducer }