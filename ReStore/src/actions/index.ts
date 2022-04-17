import { Book } from "./../types/types"
interface BooksAction {
    type: string,
    payload: Array<Book>
};

const booksLoader = (newBooks: Array<Book>) : BooksAction => {
    return {
        type: "BOOKS_LOADED",
        payload: newBooks
    }
}

export type { BooksAction }

export default booksLoader