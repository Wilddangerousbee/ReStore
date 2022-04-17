import { render, screen } from "@testing-library/react"
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom"
import App from "./components/app/app"
import PageNotFound from "./page-not-found/page-not-found"

import '@testing-library/jest-dom/extend-expect';


describe("test routing", () => {
    test('defualt', () => { 
        render(      
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<App/>}/>
              <Route path="*" element={<PageNotFound /> } />
            </Routes>
          </BrowserRouter>)

        const elementPageNotFoun = screen.queryByTestId("page-not-found");
        
        expect(elementPageNotFoun).toBeNull();
    })

    test('page not fund', () => { 
        render(      
        <MemoryRouter initialEntries={["/gfdsgfds"]} >
            <Routes>
              <Route path="/" element={<App/>}/>
              <Route path="*" element={<PageNotFound /> } />
            </Routes>
        </MemoryRouter>)

        const elementPageNotFoun = screen.getByText(/404/i);

        screen.debug();

        expect(elementPageNotFoun).toBeInTheDocument();

    })
})

export{}