import { Dispatch } from "react";
import { ActionBook, Basket, Book } from "../../types";
import { ActionsBasket, ActionsBasketTypes } from "../../types/reducer/Basket";

const addBook = (book : Book) => {
    return (dispatch : Dispatch<ActionsBasketTypes>) => {
        dispatch({
            type: ActionsBasket.ADD_BOOK,
            payload: book,
        })
    }
}

const removeBook = (book : Book) => {
    return (dispatch : Dispatch<ActionsBasketTypes>) => {
        dispatch({
            type: ActionsBasket.REMOVE_BOOK,
            payload: book,
        })
    }
}

export { addBook, removeBook }