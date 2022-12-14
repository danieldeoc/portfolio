import React from "react";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import BackHomeTop from "../components/BackHomeTop.js";
import BackHome from "../components/BackHome.js";
import Bullet from "../components/bullets";

import Img1 from "../images/totvs/001.jpg";
import Img2 from "../images/totvs/002.jpg";
import Img3 from "../images/totvs/003.jpg";
import Img4 from "../images/totvs/004.jpg";
import Img5 from "../images/totvs/005.jpg";
import Img6 from "../images/totvs/006.jpg";
import Img7 from "../images/totvs/007.jpg";
import Img8 from "../images/totvs/008.jpg";
import Img9 from "../images/totvs/009.jpg";
import Img10 from "../images/totvs/010.jpg";
import Img11 from "../images/totvs/011.jpg";
import Img12 from "../images/totvs/012.jpg";
import Img13 from "../images/totvs/013.jpg";
import Img14 from "../images/totvs/014.jpg";
import Img15 from "../images/totvs/015.jpg";
import Img16 from "../images/totvs/016.jpg";
import Img17 from "../images/totvs/017.jpg";
import Img18 from "../images/totvs/018.jpg";
import Img19 from "../images/totvs/019.jpg";
import Img20 from "../images/totvs/020.jpg";
import Img21 from "../images/totvs/021.jpg";

function BusinessPortugal(){
    window.scrollTo(0,0);
    return(
        <>
            <div className='container projectPage'>
                <BackHomeTop />
                <h1>Victor's Barber Shop market study</h1>
                <p>Victor's Barber Shop was a market study developed for Business Portugal in order to obtain a better understanding of the business environment in Lisbon for Victor, an entrepreneur looking to open his barber in Lisbon.</p>

                <h2>Project scope:</h2>
                <p>Find the best place, with the best public to open a barbershop.</p>

                <h3>My Role</h3>
                <p>I acted as a Service Designer, helping Business Portugal Consultors to develop the Business Plan. I also run the environmental business research bellow:</p>

                <br/>
                <h3>Business Environmental Research:</h3>
                <br/>
                <iframe src="https://www.slideshare.net/slideshow/embed_code/key/oOx7NJHqsvUD0v" width="100%" height="456" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" className="iframeSlideshare" allowfullscreen> </iframe>

                <br/><br/><br/>
                <iframe src="https://www.slideshare.net/slideshow/embed_code/key/njkD21tRfwj6Im" width="100%" height="456" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" allowfullscreen> </iframe> 

                <BackHome />
            </div>      
        </>
    )
}

export default BusinessPortugal;