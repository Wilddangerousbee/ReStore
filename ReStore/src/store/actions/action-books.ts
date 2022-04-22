import axios from "axios"
import { Dispatch } from "react"
import { DateToBookArray } from "../../helpers"
import { booksLoaded, booksLoading, booksActionTypes, booksError, Book } from "../../types"
import { ServiceApi } from "../../components/service"

const fetchBooks = () => {
    const serviceApi = new ServiceApi();

    return async (dispatch : Dispatch<booksActionTypes>) => {
        try {
            dispatch(booksLoading())
            const books : Book[] = DateToBookArray(await serviceApi.getDate());
            dispatch(booksLoaded(books));
        } catch(e) {
            dispatch(booksError("При загрузке данных произошла ошибка"))
        }
    }
}

export { fetchBooks }