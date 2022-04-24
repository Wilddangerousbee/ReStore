import { FC } from "react";
import BookList from "../../book-list";
import ErrorBoundary from "../../error-boundry";
import SearchPanel from "../../search-panel";

import "./home-page.css"

const HomePage:FC = () => {
    return (
        <div className="home-page">
            <h1>ReStore</h1>
            <SearchPanel/>
            <ErrorBoundary>
                <BookList />
            </ErrorBoundary>
        </div>
    );
}

export default HomePage