import React from "react";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Bullet from "../components/bullets";

import Img1 from "../images/gazinIntro.png";
import GazinImg from "../images/gazinsite.jpg";





function Gazin(){

    

    return(
        <>
            <div className='body projectBody'>
                <Link to="/">
                    <i className="fa-solid fa-arrow-left linkback"></i>
                </Link>
                <h1>Gazin Retails Blog</h1>
                <img src={Img1} alt="Gazin Blog do Varejo" className="introImg" />
                <p>In 2015, Gazin Retailers and LodonPress Content decided to create a blog to provide information to its retail clients. With LondonPress, we created the Blog Design and developed it with Wordpress technologie, with a great focus in user experience and site  performance.</p>
                

                <h2>Original layout:</h2>
                <a href={GazinImg} target="_blank">
                    <img src={GazinImg} alt="Original Layout" className="sitepreview" />
                </a>
                <div className="txtCenter">
                    <a 
                        target="blank"
                        className="invisionLink"
                        title="Check the full Prototype in Invision"
                        href="https://blog.gazinatacado.com.br/">
                            Check the blog
                    </a> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a 
                        target="blank"
                        className="invisionLink colorDark"
                        title="Check the full Prototype in Invision"
                        href="https://github.com/danieldeoc/blogdovarejo">
                            Check the theme source code
                    </a>
                </div>

                

                <h2>Performance report:</h2>
                <p>The new blog brought better performance results, the report below shows that the bounce rate fell from 78% to 30%, and that the time users spent on site raised to 3 minutes per visit, an increase of 90%. The new site was 49% faster than the old one and consumed 28% less data. Google search visits increased 29% and 60% of the new posts were shared in whatsapp at least one time. </p>

                
                <iframe src="https://www.slideshare.net/slideshow/embed_code/key/mZdiPkdSpQC1vf" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" allowfullscreen> </iframe>
                
                <div className="goBackBox">
                    <Link to="/" className="goRealBack" title="Go back">
                        <i className="fa-solid fa-arrow-left"></i>
                    </Link> 
                </div>
            </div>      
        </>
    )
}

export default Gazin;