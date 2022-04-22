import { FC, Fragment } from "react";
import BookList from "../book-list";
import ErrorBoundary from "../error-boundry";

const HomePage:FC = () => {
    return (
        <Fragment>
            <h1>Home Page</h1>
            <ErrorBoundary>
                <BookList />
            </ErrorBoundary>
        </Fragment>
    );
}

export default HomePage