import React, {FC} from "react";
import { ISpinner } from "../../types";

import ErrorBoundary from "../error-boundry";

import "./spinner.css";

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