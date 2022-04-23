import { SearchAction, SearchActions, SearchState } from "../../types/Search";

const initioaState : SearchState = {
    searchString: "computer",
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