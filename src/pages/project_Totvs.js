import React from "react";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
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


function Totvs(){
    return(
        <>
            <div className='body projectBody'>
                <Link to="/">
                    <i className="fa-solid fa-arrow-left linkback"></i>
                </Link>
                <h1>TOTVs Fiscal Triangulation</h1>
                <p>TOTVs Fiscal Triangulation was a project developed by TOTVS Warehouse Manegement System to create the tax module for goods distribution amoung warehouses.</p>

                <h2>Project scope:</h2>
                <p>The tax process for goods distribution between warehouses</p>
                <p>For business customers</p>
                <p>Only design thinking methodologies.</p>
                <p>Team with 1 UX, 4 developers and a Product Owner.</p>

                <h3>My Role</h3>
                <p>I acted as a UX Designer, running the research process with the PO, and running the ideation online workshop with the team, to design the Fiscal Triangulation flow. Then, the entire flow was designed in a high fidelity prototype using TOTVs Design Guidelines.</p>

                <p>TOTVs Fiscal Triangulation Preview:</p>
                <img src={Img1} className="responsiveImage" /><br/><br/>
                <img src={Img2} className="responsiveImage" /><br/><br/>
                <img src={Img3} className="responsiveImage" /><br/><br/>
                <img src={Img4} className="responsiveImage" /><br/><br/>
                <img src={Img5} className="responsiveImage" /><br/><br/>
                <img src={Img6} className="responsiveImage" /><br/><br/>
                <img src={Img7} className="responsiveImage" /><br/><br/>
                <img src={Img8} className="responsiveImage" /><br/><br/>
                <img src={Img9} className="responsiveImage" /><br/><br/>
                <img src={Img10} className="responsiveImage" /><br/><br/>
                <img src={Img11} className="responsiveImage" /><br/><br/>
                <img src={Img12} className="responsiveImage" /><br/><br/>
                <img src={Img13} className="responsiveImage" /><br/><br/>
                <img src={Img14} className="responsiveImage" /><br/><br/>
                <img src={Img15} className="responsiveImage" /><br/><br/>
                <img src={Img16} className="responsiveImage" /><br/><br/>
                <img src={Img17} className="responsiveImage" /><br/><br/>
                <img src={Img18} className="responsiveImage" /><br/><br/>
                <img src={Img19} className="responsiveImage" /><br/><br/>
                <img src={Img20} className="responsiveImage" /><br/><br/>
                <img src={Img21} className="responsiveImage" /><br/><br/>
                
            </div>      
        </>
    )
}

export default Totvs;