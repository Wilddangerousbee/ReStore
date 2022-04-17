import React, {FC} from "react";

import ErrorBoundary from "../error-boundry/error-boundry";

import "./spinner.css";

interface ISpinner {
    widht: number,
    hieght: number
}

const Spinner: FC<ISpinner>  = ({widht, hieght}) => {
    console.log(widht, hieght)
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