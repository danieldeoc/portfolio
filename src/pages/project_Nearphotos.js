import React from "react";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Bullet from "../components/bullets";
import BackHomeTop from "../components/BackHomeTop.js";
import BackHome from "../components/BackHome.js";
import Near from "../images/nearphoto.png";

function NearPhotos(){ 
    window.scrollTo(0,0);
    return(
        <>
            <div className='container projectPage'>
                <BackHomeTop />
                <h1>Nearphoto App</h1>
                <p>App and Logo design created as a freelancer for a developer for a new StartUp project.</p>
                
                <h2>App preview:</h2><br/>
                <div className="imageDisplayer">    
                    <img src={Near} width="600" alt="Original Layout" className="sitepreview" />
                </div>

                <h2>Prototype Preview:</h2><br/>
                <iframe  width="100%" height="550" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F0mDk4eXxch79QTHWl1xqJb%2FNearPhotos%3Fpage-id%3D0%253A1%26node-id%3D1%253A2%26viewport%3D170%252C154%252C0.13%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A2" allowfullscreen></iframe>
                <BackHome />
            </div>      
        </>
    )
}

export default NearPhotos;