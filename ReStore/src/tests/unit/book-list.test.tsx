import { render, screen } from "@testing-library/react";
import BookList from "../../components/book-list";

import store from "../../store";

import '@testing-library/jest-dom/extend-expect';
import { Provider } from "react-redux";
import { ActionBook, booksActionTypes } from "../../types";
import { BooksListTest } from "../mock/books";

describe("test book list", () => {
    test('one element in array', () => { 
        store.dispatch(BooksListTest);
        
        render(
            <Provider store={store}>
                <BookList />
            </Provider>
        )

        screen.debug();

        expect(screen.queryByText(/hideo/i)).toBeInTheDocument();
        expect(screen.queryByText(/kodzima/i)).toBeInTheDocument();
        expect(screen.queryByText(/kujo/i)).toBeInTheDocument();
        expect(screen.queryByText(/jotore/i)).toBeInTheDocument();
    })
})