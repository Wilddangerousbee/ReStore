import { FC, Fragment } from "react";
import BookList from "../../book-list";
import ErrorBoundary from "../../error-boundry";
import SearchPanel from "../../search-panel/search-panel";

const HomePage:FC = () => {
    return (
        <Fragment>
            <h1>Home Page</h1>
            <SearchPanel/>
            <ErrorBoundary>
                <BookList />
            </ErrorBoundary>
        </Fragment>
    );
}

export default HomePage