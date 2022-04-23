import { type } from "os";
import { Book } from "../../types";

enum ActionsBasket {
    ADD_BOOK = "ADD_BOOK", 
    REMOVE_BOOK = "REMOVE_BOOK"
}

const ActionsBasketAdd = (book: Book) => {
    return {
        type: ActionsBasket.ADD_BOOK,
        payload: book,
    }
}

const ActionsBasketRemove = (book: Book) => {
    return {
        type: ActionsBasket.REMOVE_BOOK,
        payload: book,
    }
}

interface actionsBasketAdd  {
    type: ActionsBasket.ADD_BOOK,
    payload: Book,
}


interface actionsBasketRemove{
    type: ActionsBasket.REMOVE_BOOK,
    payload: Book,
}

type ActionsBasketTypes = actionsBasketAdd | actionsBasketRemove

interface Basket {
    count: number,
    total: number,
    books: Array<Book>,
}

export type { ActionsBasketTypes, Basket }
export { ActionsBasketAdd, ActionsBasketRemove, ActionsBasket }