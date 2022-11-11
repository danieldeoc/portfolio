import React from "react";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Bullet from "../components/bullets";

import Img from "../images/0002-santander-mockup.png";


function Santander(){
    return(
        <>
            <div className='body projectBody'>
                <Link to="/">
                    <i className="fa-solid fa-arrow-left linkback"></i>
                </Link>
                <h1>Santander Open House</h1>
                <p>Santander Open House was a project developed by NovaBase and Santander, with McKinsey and other IT consultings to develop an app that allows bank customers to apply to an online mortgage process.</p>

                <h2>Project scope:</h2>
                <p>The entire process to buy a house online</p>
                <p>For customers and bank branches</p>
                <p>Only design thinking methodologies.</p>
                <p>Team with 5 UX members and 30+ people.</p>

                <h3>My Role</h3>
                <p>I acted as a UX Designer, designing prototypes for the project, applying user interviews and user tests.</p>


                <h3>Santander Open House Preview:</h3>
                <img src={Img} className="responsiveImage" />
                <div className="center">
                    <a 
                        target="blank"
                        className="invisionLink"
                        title="Check the full Prototype in Invision"
                        href="https://marvelapp.com/prototype/72h1f5d/screen/89388536">
                            Check the full Prototype in MarvelApp
                    </a>  
                </div>


                <div className="goBackBox">
                    <Link to="/" className="goRealBack" title="Go back">
                        <i className="fa-solid fa-arrow-left"></i>
                    </Link> 
                </div>
            </div>      
        </>
    )
}

export default Santander;