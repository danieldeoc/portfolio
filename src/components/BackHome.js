import React from "react";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";

function BackHome(){
    return(
        <div className="goBackBox">
            <Link to="/" className="goRealBack" title="Go back">
                <i className="fa-solid fa-arrow-left"></i>
            </Link> 
        </div>
    )
}

export default BackHome;