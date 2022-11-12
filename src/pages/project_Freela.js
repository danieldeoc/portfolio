import React from "react";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Bullet from "../components/bullets";

import Img1 from "../images/freelaproject/0001.jpg";
import Img2 from "../images/freelaproject/0002.jpg";
import Img3 from "../images/freelaproject/0003.jpg";
import Img4 from "../images/freelaproject/0004.jpg";
import Img5 from "../images/freelaproject/0005.jpg";
import Img6 from "../images/freelaproject/0006.jpg";
import Img7 from "../images/freelaproject/0007.jpg";

import Img9 from "../images/freelaproject/0009.jpg";
import Img10 from "../images/freelaproject/0010.jpg";
import Img11 from "../images/freelaproject/0011.png";
import Img12 from "../images/freelaproject/0012.png";
import Img13 from "../images/freelaproject/0013.png";
import Img14 from "../images/freelaproject/0014.png";
import Img15 from "../images/freelaproject/0015.jpg";
import Img16 from "../images/freelaproject/0016.jpg";
import Img17 from "../images/freelaproject/0017.jpg";
import Img18 from "../images/freelaproject/0018.jpg";
import Img19 from "../images/freelaproject/0019.jpg";
import Img20 from "../images/freelaproject/0020.jpg";
import Img21 from "../images/freelaproject/0021.jpg";
import Img22 from "../images/freelaproject/0022.jpg";
import Img23 from "../images/freelaproject/0023.jpg";
import Img24 from "../images/freelaproject/0024.jpg";
import Img25 from "../images/freelaproject/0025.jpg";
import Img26 from "../images/freelaproject/0026.jpg";
import Img27 from "../images/freelaproject/0027.jpg";







function FreelaPj(){
    
    return(
        <>
            <div className='body projectBody'>
                <Link to="/">
                    <i className="fa-solid fa-arrow-left linkback"></i>
                </Link>
                <h1>Freela Project</h1>                
                <p>Freela Project was a study to develop an app for freelancers to manage their time and clients.</p>
                <div className="txtCenter fpimgs">
                <img src={Img1} />
                <img src={Img2} />
                <img src={Img3} />
                <img src={Img4} />
                <img src={Img5} />
                <img src={Img6} />
                <img src={Img7} />
                
                <img src={Img9} />
                <img src={Img10} />
                <img src={Img11} />
                <img src={Img12} />
                <img src={Img13} />
                <img src={Img14} />
                <img src={Img15} />
                <img src={Img16} />
                <img src={Img17} />
                <img src={Img18} />
                <img src={Img19} />
                <img src={Img20} />
                <img src={Img21} />
                <img src={Img22} />
                <img src={Img23} />
                <img src={Img24} />
                <img src={Img25} />
                <img src={Img26} />
                <img src={Img27} />
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

export default FreelaPj;