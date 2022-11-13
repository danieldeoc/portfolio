import React from "react";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";

function BackHomeTop(){
    return(
        <Link to="/" className="goBackHomeLinkTop">
            <i className="fa-solid fa-arrow-left linkback"></i> Back to home page
        </Link>
    )
}

export default BackHomeTop;