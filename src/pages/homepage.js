import React from "react";
import SuperTitle from "../components/superTitle";

import {BrowserRouter, Route, Routes, Link} from "react-router-dom";

import PjBk from "../images/link-bk.png";
import PjSt from "../images/link-st.png";
import PjTt from "../images/link-tt.png";
import PjBp from "../images/link-bp.png";
import PjGp from "../images/link-gp.png";
import PjGz from "../images/link-gz.png";
import PjFp from "../images/link-fp.png";
import PjBvDev from "../images/link-bv-dev.png";

import Me from "../images/me.png";

function HomePage(){
    return(
        
        <div className='body'>

            <div className="columnBox homeStart">
                <div className="cl cl30 txtCenter">
                    <img src={Me} alt="Daniel de Oliveira Carvalho photo" width="150" className="profilephoto" />
                    <a 
                        className='linkSocial' 
                        href='https://www.linkedin.com/in/daniel-de-o-carvalho/' 
                        target="_blank" 
                        title='Meu perfil no LinkedIn'>
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                    <a 
                        className='linkSocial' 
                        href='https://github.com/danieldeoc' 
                        target="_blank" 
                        title='Meu perfil no GitHub'>
                        <i class="fa-brands fa-github"></i>
                    </a>
                    <a 
                        className='linkSocial' 
                        href='mailto:danieldeoc@gmail.com' 
                        target="_blank" 
                        title='Envia-me um e-mail'>
                        <i class="fa-regular fa-envelope"></i>
                    </a>
                </div>
                <div className="cl cl70">
                    <SuperTitle value="Hi! I'm Daniel. I've been working as a Designer since 2007, and as a UX Designer since 2014." />
                    <h2 className="superTitleBody">
                        In the past years my main actuation was as a UX Designer and Researcher, applying design thinking methodologies for new and ongoing business.
                    </h2>
                    <h2 className="superTitleBody">
                        I'm also working as a Front-End developer, developing with HTML, CSS, Javascript ES6+, TypeScript, MySQL, PHP (wordpress) and ReactJS.
                    </h2>
                </div>
                <div className="clear"></div>
            </div>

        
        
        

            <div className="carrouselBox">
                <div className="carrouselContainer">
                    <div className="card">
                        <Link to="/totvs" className="linkBox ttCard">
                            <img src={PjTt} alt="TOTVS WMS" />
                            <span>UX / UI</span>
                            <h3>WMS | Fiscal Triangulation</h3>
                            <span>2020</span>
                        </Link>
                    </div>

                    <div className="card">
                        <Link to="/bankinter" className="linkBox bkCard">
                            <img src={PjBk} alt="Bankinter Digital OnBoarding" />
                            <span>UX Research / UX / UI</span>
                            <h3>Digital OnBoarding</h3>
                            <span>2019</span>
                        </Link>
                    </div>

                    <div className="card">
                        <Link to="/santander" className="linkBox stCard">
                            <img src={PjSt} alt="Santander Open House" />
                            <span>UX Research / UX / UI</span>
                            <h3>Open House / Crédito Habitação</h3>
                            <span>2018</span>
                        </Link>
                    </div>

                    <div className="card">
                        <Link to="/businessportugal" className="linkBox bpCard">
                            <img src={PjBp} alt="Business Portugal Victors Barber Shop" />
                            <span>Market Research</span>
                            <h3>Victors Barbershop</h3>
                            <span>2018</span>
                        </Link>
                    </div>

                    

                    <div className="card">
                        <Link to="/gazetacapas" className="linkBox gpCard">
                            <img src={PjGp} alt="Gazeta do Povo Concept Test" />
                            <span>UX Research</span>
                            <h3>Customizable News Homepages</h3>
                            <span>2015</span>
                        </Link>
                    </div>


                    <div className="card">
                        <Link to="/gazin" className="linkBox gzCard">
                            <img src={PjGz} alt="Gazeta do Povo Concept Test" />
                            <span>UX / UI / Front-end</span>
                            <h3>Gazin Retails Blog</h3>
                            <span>2015</span>
                        </Link>
                    </div>
                    
                    <div className="card">
                        <Link to="/freelaproject" className="linkBox fpCard">
                            <img src={PjFp} alt="Freela Project" />
                            <span>UX / UI</span>
                            <h3>Freela Project</h3>
                            <span>2014</span>
                        </Link>
                    </div>


                </div>

            </div>


            
        
        </div>
    )
}

export default HomePage;