import { render, screen } from "@testing-library/react";
import BookListItem from "../../components/book-list-item";

import '@testing-library/jest-dom/extend-expect';
import { Book } from "../../types";
import { BookListTest } from "../mock/books";

describe("test books list item", () => {
    test('add book', () => { 
        render(<BookListItem id={1} {...BookListTest} />)

        expect(screen.getByText(/don/i)).toBeInTheDocument();
        expect(screen.getByText(/servantes/i)).toBeInTheDocument();
    })
})