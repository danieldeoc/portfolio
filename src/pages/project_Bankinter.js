import React from "react";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Bullet from "../components/bullets";

import Img from "../images/0001-bankinter-mockup.jpg";
import BkFlow from "../images/0001-bankinter-flow.jpg";
import Bench from "../images/0001-bankinter-bench.jpg";


function Bankinter(){
    return(
        <>
            <div className='body projectBody'>
                <Link to="/">
                    <i className="fa-solid fa-arrow-left linkback"></i>
                </Link>
                <h1>Bankinter</h1>
                <p>Bankinter Digital OnBoarding was a project developed by NovaBase for Bankinter to allow bank customer to open a digital account with their phones on a video call.</p>

                <h2>Project scope:</h2>
                <p>Design a onboarding user experience for new customers.</p>
                <p>Only mobile experience.</p>
                <p>Only design thinking methodologies.</p>
                <p>Only for new customers.</p>
                <p>Team with 5 members: 2 UX Designers, UX Designer Mananger, Project mananger and an System analyst.</p>

                <h3>My Role</h3>
                <p>I acted as a UX Designer, developing the State of OnBoarding research, applying the current branch openning process research, presenting the results in the workshop week and designing the final workflow prototype using Bankinter guidelines.</p>

                <Bullet value="1" />
                <p>The State of The OnBoarding research.</p>
                <div className="center">
                <iframe 
                        src="https://www.slideshare.net/slideshow/embed_code/key/eI9XZastcUtjdr" 
                        width="100%" height="556" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" 
                        allowfullscreen> </iframe> 
                        <a 
                            target="blank"
                            className="invisionLink"
                            title="Check the full Prototype in Invision"
                            href="https://www.slideshare.net/secret/eI9XZastcUtjdr">
                                Check the presentation on SlideShare
                        </a>
                       
                </div>
                <Bullet value="2" />
                <p>Map the current branch opening process.</p>
                <div className="center">
                    <a href={BkFlow}>
                        <img src={BkFlow} className="responsiveImg" />
                    </a>
                </div>

                <Bullet value="3" />
                <p>Benchmarket research: Map the main players opening process.</p>
                <div className="center">
                    <a href={Bench}>
                        <img src={Bench} className="responsiveImg" />
                    </a>
                </div>

                <Bullet value="4" />
                <p>Design with the UX Team a Workshop to create 3 journeys with bankinter staff.</p>

                <Bullet value="5" />
                <p>Run with the UX Team and key Stakeholders the workshop with Bankinter staff.</p>
                <div className="videoBox">
                    <iframe src="https://player.vimeo.com/video/363815768?h=5dfb581514&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen className="videoBk" title="V&amp;iacute;deo Bankinter"></iframe><script src="https://player.vimeo.com/api/player.js"></script>
                    </div>
                <br/><br/><br/>

                <Bullet value="6" />
                <p>Design the created journeys and prototypes.</p>
                <img src={Img} className="responsiveImage" />
                <div className="center">
                    <a 
                        target="blank"
                        className="invisionLink"
                        title="Check the full Prototype in Invision"
                        href="https://projects.invisionapp.com/share/MJ132HO6BAR3#/screens/470468030_01-0-1-CJ1_-_Login_App">
                            Check the full Prototype in Invision
                    </a>  
                </div>
            </div>      
        </>
    )
}

export default Bankinter;