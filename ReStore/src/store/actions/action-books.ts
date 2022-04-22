import axios from "axios"
import { Dispatch } from "react"
import { booksLoaded, booksLoading, booksActionTypes, booksError } from "../../types"

const fetchBooks = () => {
    return async (dispatch : Dispatch<booksActionTypes>) => {
        try {
            dispatch(booksLoading())
            const data = (await axios.get("https://jsonplaceholder.typicode.com/todos/1")).data;
            dispatch(booksLoaded(data));
                
        } catch(e) {
            dispatch(booksError("При загрузке данных произошла ошибка"))
        }
    }
}

export { fetchBooks }