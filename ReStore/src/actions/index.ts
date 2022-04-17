interface BooksAction {
    type: string,
    payload: Array<string>
};

const booksLoader = (newBooks: Array<string>) : BooksAction => {
    return {
        type: "BOOKS_LOADED",
        payload: newBooks
    }
}

export type { BooksAction }

export default booksLoader