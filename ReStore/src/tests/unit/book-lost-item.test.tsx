import { render, screen } from "@testing-library/react";
import BookListItem from "../../components/book-list-item";

import '@testing-library/jest-dom/extend-expect';
import { Book } from "../../types";

describe("test books list item", () => {
    test('add book', () => { 
        const book : Book = {title: "Don", author: "Servantes"};
        render(<BookListItem {...book} />)

        expect(screen.getByText(/don/i)).toBeInTheDocument();
        expect(screen.getByText(/servantes/i)).toBeInTheDocument();
    })
})