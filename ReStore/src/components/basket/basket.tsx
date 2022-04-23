import React, { FC } from "react";
import { Link } from "react-router-dom";

import "./basket.css"

const Basket : FC = () => {
    return (
        <div className="basket">
            <Link target="_self" to={"/carts"} className="g3s k1c" data-widget="headerIcon">
                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className="la">
                    <path 
                    fill-rule="evenodd" 
                    clip-rule="evenodd" 
                    d="M10 2a4 4 0 00-4 4v2H.867L2.18 18.496A4 4 0 006.15 22h11.703a4 4 0 003.969-3.504L23.133 8H18V6a4 4 0 00-4-4h-4zm3 7a1 1 0 00-1-1H8V6a2 2 0 012-2h4a2 2 0 012 2v4h4.867l-1.03 8.248A2 2 0 0117.851 20H6.148a2 2 0 01-1.984-1.752L3.133 10H12a1 1 0 001-1z" fill="currentColor">
                    </path>        
                </svg>
                <span className="tsCaptionBold ck2">
                    1
                </span>
            </Link>
        </div>
    )
}

export default Basket