import { render, screen } from "@testing-library/react";
import { Book } from "../../types/types";
import BookList from "./book-list";

import '@testing-library/jest-dom/extend-expect';

describe("test book list", () => {
    test('one element in array', () => { 
        const books = [{
            title: "Hideo",
            author: "Kodzima"
        }, {
            title: "Kujo",
            author: "Jotore"
        }]
        
        render(
            <BookList books={books}/>
        )

        expect(screen.queryByText("Hideo")).toBeInTheDocument();
        expect(screen.queryByText("Kodzima")).toBeInTheDocument();
        expect(screen.queryByText("Kujo")).toBeInTheDocument();
        expect(screen.queryByText("Jotore")).toBeInTheDocument();
    })
})