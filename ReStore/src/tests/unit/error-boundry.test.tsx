import { render, screen } from "@testing-library/react";
import ErrorBoundary from "../../components/error-boundry/error-boundry";

import '@testing-library/jest-dom/extend-expect';

describe("Correct test", () => {
    test('Correct element', () => { 
        render(<ErrorBoundary>
                <h1 data-testid="it-is-norm">It is normal test</h1>
               </ErrorBoundary>);

        const errorMesageComponent = screen.queryByTestId("error-message");

        expect(screen.getByText(/It is normal test/i)).toBeInTheDocument();
        expect(errorMesageComponent).toBeNull();
    })

})