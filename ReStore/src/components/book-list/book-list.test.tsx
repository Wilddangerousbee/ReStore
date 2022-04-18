import { render, screen } from "@testing-library/react";
import { Book } from "../../types/types";
import BookList from "./book-list";

import store from "../../store";

import '@testing-library/jest-dom/extend-expect';
import { Provider } from "react-redux";
import { BooksAction } from "../../actions";

describe("test book list", () => {
    test('one element in array', () => { 

        const action : BooksAction = {
            type: "BOOKS_LOADED",
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

        expect(screen.queryByText("Hideo")).toBeInTheDocument();
        expect(screen.queryByText("Kodzima")).toBeInTheDocument();
        expect(screen.queryByText("Kujo")).toBeInTheDocument();
        expect(screen.queryByText("Jotore")).toBeInTheDocument();
    })
})