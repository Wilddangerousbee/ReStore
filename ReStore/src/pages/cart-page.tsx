import React, { FC, useEffect, useState } from "react";

import ServiceApi from "../components/service/bookstore-service-context";

const CardPage:FC = () => {
    const [hi, setHi] = useState();
    const [hi1, setHi1] = useState();

    const serviceApi = new ServiceApi();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then(response => response.json())
            .then(data => setHi(data))
            .catch(e => setHi(e))
 
    }, [])

    return (
        <React.Fragment>
            <h1>{hi}</h1>
            {/* <h1>{hi}</h1> */}
            <h1>Cart Page</h1>
        </React.Fragment>
    )
}

export default CardPage;