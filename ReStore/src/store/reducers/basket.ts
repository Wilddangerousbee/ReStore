import { ActionsBasket, ActionsBasketTypes, Basket } from "../../types/reducer/Basket"

const initialBasket : Basket = {
    count: 0,
    total: 0,
    books: []
} 

const BasketReducer = (store = initialBasket, action : ActionsBasketTypes) : Basket => {
    switch (action.type) {
        case ActionsBasket.ADD_BOOK:
            return {
                count: store.count + 1,
                total: store.total + 150,
                books: store.books.concat(action.payload),
            }
        case ActionsBasket.REMOVE_BOOK:
            let removeFlg = false;
            return {
                count: store.count - 1,
                total: store.total - 150,
                books: store.books.filter((el) => {
                    if (action.payload.title === el.title && !removeFlg) {
                        removeFlg = true;
                        return false;
                    }
                    return true;
                }),
            }
    
        default:
            return store;
    }
}

export default BasketReducer