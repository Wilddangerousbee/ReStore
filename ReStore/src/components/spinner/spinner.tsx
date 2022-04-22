import React, {FC} from "react";

import ErrorBoundary from "../error-boundry";

import "./spinner.css";

const Spinner: FC  = () => {
    return (
        <ErrorBoundary>
        <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        </ErrorBoundary>
    )
}


export default Spinner;