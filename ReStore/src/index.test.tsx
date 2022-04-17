import { render, screen } from "@testing-library/react"
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom"
import App from "./components/app/app"
import PageNotFound from "./pages/page-not-found"

import '@testing-library/jest-dom/extend-expect';


describe("test routing", () => {
    test('defualt', () => { 
        render(      
        <BrowserRouter>
            <App/>
        </BrowserRouter>)

        const elementPageNotFound = screen.queryByText(/404/i);
        
        expect(elementPageNotFound).toBeNull();
    })

    test('carts page', () => { 
        render(      
        <MemoryRouter initialEntries={["/carts"]} >
            <App/>
        </MemoryRouter>)

        const elementPageNotFound = screen.queryByText(/404/i);

        expect(elementPageNotFound).toBeNull();

    })

    test('page not fund', () => { 
        render(      
        <MemoryRouter initialEntries={["/gfdsgfds"]} >
            <App/>
        </MemoryRouter>)

        const elementPageNotFound = screen.getByText(/404/i);

        expect(elementPageNotFound).toBeInTheDocument();

    })
})

export{}