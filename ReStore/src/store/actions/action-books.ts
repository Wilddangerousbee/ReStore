import { Dispatch } from "react"
import { DateToBookArray } from "../../helpers"
import { booksLoaded, booksLoading, booksActionTypes, booksError, Book } from "../../types"
import { ServiceApi } from "../../service"

const fetchBooks = () => {
    const serviceApi = new ServiceApi();

    return async (dispatch : Dispatch<booksActionTypes>) => {
        try {
            dispatch(booksLoading())
            const date = await serviceApi.getDate();
            console.log(date);
            const books : Book[] = DateToBookArray(date.items);
            dispatch(booksLoaded(books));
        } catch(e) {
            dispatch(booksError("При загрузке данных произошла ошибка"))
        }
    }
}

export { fetchBooks }