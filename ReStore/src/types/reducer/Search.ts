enum SearchActions {
    NEW_SEARCH = "NEW_SEARCH",
}

interface SearchAction {
    type: SearchActions.NEW_SEARCH,
    payload: string,
}

interface SearchState {
    searchString : string
}

const setNewSearch = (newSearch : string) : SearchAction => {
    return {
        type: SearchActions.NEW_SEARCH,
        payload: newSearch
    }
}

export type {SearchAction, SearchState}

export {SearchActions, setNewSearch}