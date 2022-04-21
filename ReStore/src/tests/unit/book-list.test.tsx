import { render, screen } from "@testing-library/react";
import BookList from "../../components/book-list";

import store from "../../store";

import '@testing-library/jest-dom/extend-expect';
import { Provider } from "react-redux";
import { ActionBook, booksActionTypes } from "../../types";

describe("test book list", () => {
    test('one element in array', () => { 

        const action : booksActionTypes = {
            type: ActionBook.BOOKS_LOADED,
            payload: [{
                title: "Hideo",
                author: "Kodzima"
            }, {
                title: "Kujo",
                author: "Jotore"
            }]
        }

        store.dispatch(action);
        
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