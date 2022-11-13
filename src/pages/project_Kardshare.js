import React from "react";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Bullet from "../components/bullets";
import BackHomeTop from "../components/BackHomeTop.js";
import BackHome from "../components/BackHome.js";
import Img1 from "../images/gazinIntro.png";
import Ks from "../images/ks.png";

function Kardshare(){ 
    window.scrollTo(0,0);
    return(
        <>
            <div className='container projectPage'>
                <BackHomeTop />
                <h1>Kardshare</h1>
                <p>Kardshare was a visit card sharing app, developed by me and some friends between 2012 and 2015 with HTML, CSS, Javascript, Java and Phonegap technologies. The main goal of the app was to make it easier for people to share their contacts with their phones.</p>
                <h2>Achievements:</h2>
                <p>During the 3 years of the project we got around 200 users with no investments or advertising, and we were one of the 100 selected startups to present our app in Campus Party 2014.</p>

                <h2>App preview:</h2>
                <div className="imageDisplayer">
                    <img src={Ks} alt="Kardshare" />
                </div>
                
                <BackHome />
            </div>      
        </>
    )
}

export default Kardshare;