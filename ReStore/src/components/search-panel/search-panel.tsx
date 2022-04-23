import React, { ChangeEvent, useDebugValue, useEffect, useMemo, useState } from "react";
import { FC } from "react";
import { useAction } from "../../hooks/useActions";
import { useSelectionType } from "../../hooks/useSelectionTyped";

const SearchPanel : FC = () => {
    const { updateSearch } = useAction();
    const { searchString } = useSelectionType(state => state.search)

    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value !== searchString){
            updateSearch(e.currentTarget.value)
        }
    }
    
    return (
        <input onChange={handleChange} value={searchString} className="form-control" placeholder="Search"/>
    )
}

export default SearchPanel