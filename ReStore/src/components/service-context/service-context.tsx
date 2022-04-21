import React from "react";
import ServiceApi from "../service/bookstore-service-context";

const {
    Provider, 
    Consumer} = React.createContext(ServiceApi)

export {Provider, Consumer}

