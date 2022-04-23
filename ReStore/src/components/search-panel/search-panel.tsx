import React, { ChangeEvent } from "react";
import { FC } from "react";
import { useAction } from "../../hooks/useActions";

const SearchPanel : FC = () => {
    const { updateSearch } = useAction();

    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        updateSearch(e.currentTarget.value);
    }
    
    return (
        <input onChange={handleChange} className="form-control" placeholder="Search"/>
    )
}

export default SearchPanel