import { useMemo } from "react";
import { useAction } from "./useActions";
import useDebounce from "./useDebounce";
import { useSelectionType } from "./useSelectionTyped";

const useSearch = () => {
    const { searchString, prevSearchString } = useSelectionType(state => state.search);
    const { updateSearch } = useAction();

    const fetchBooks = useDebounce(useAction().fetchBooks, 1000);

    useMemo(() => {
        if (prevSearchString !== searchString) {
            fetchBooks(searchString);   
        }
        return updateSearch(searchString);
    }, [searchString])
}

export default useSearch