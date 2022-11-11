import React from "react";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";

import Img1 from "../images/totvs/001.jpg";


function GazetaDoPovoCapas(){
    return(
        <>
            <div className='body projectBody'>
                <Link to="/">
                    <i className="fa-solid fa-arrow-left linkback"></i>
                </Link>
                <h1>Home Page Customization Research</h1>
                <p>Try a new concept of customizable homepage, where users could get news according to the profile they get in a quiz. The idea was to create a user centered newspaper with news according to the user profile, like main business players such as Netflix or Spotify.</p>

                <h2>Project scope:</h2>

                <p>14 newspaper readers were selected according to their interaction and visits to Gazeta do Povo newspaper website. 12 interviews were done in a controlled environment, where 3 models of customizable homepages were presented to the user so they can navigate and test the concept. Inputs about the navigation and viability of the project were collected.</p>

                <p>The results showed that newspaper users don’t like customizable homepages, because they think that they are missing the latest news due to the preference filters. </p>

                <p>The homepage project was aborted after the results and a new project of news recommendation started.</p>
                
                <h3>My Role</h3>
                <p>I acted as a UX Designer, helping to plan the research, apply user interviews and design user prototypes for testing.</p>
                <br/>
                <h3>Concept test aplication</h3>
                <br/>
                <iframe src="https://player.vimeo.com/video/145577188?h=4b571f5494&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="100%" height="600" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="QUIZ - Pontos positivos"></iframe>
                <br/>
                <h3>Concept test results</h3>
                <br/>
                <iframe src="https://www.slideshare.net/slideshow/embed_code/key/uKXgaWx4GiwTpP?hostedIn=slideshare&page=upload" width="100%" height="400" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
                
                <div className="goBackBox">
                    <Link to="/" className="goRealBack" title="Go back">
                        <i className="fa-solid fa-arrow-left"></i>
                    </Link> 
                </div>
            </div>      
        </>
    )
}

export default GazetaDoPovoCapas;