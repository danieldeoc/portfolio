import React from "react";
import SuperTitle from "../components/superTitle";

import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import ProjectCard from "../components/card";


function HomePage(){
    window.scrollTo(0,0);

    return(
        <>
        <div className='container'>
            <div className="introText">
                <h1><span>Hi!</span> I'm Daniel. I’m a <span>UX designer</span> and a <span>Front-end developer</span> based in Lisbon.</h1>
                <p>I'm working as a Designer since 2007, and as a UX Designer and Researcher since 2014, applying design thinking methodologies for new and ongoing business.</p>
                <p>I'm also working as a Front-End developer since 2010, developing with HTML, CSS, Javascript, TypeScript, MySQL, PHP and ReactJS.</p>
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
                <a 
                    className='linkSocial' 
                    href='https://api.whatsapp.com/send?phone=351915836652&text=Hi%2C%20Daniel.%20I%20saw%20your%20portfolio%20and%20I%20would%20like%20to%20talk%20to%20you!'
                    target="_blank" 
                    title='Manda-me um whats!'>
                    <i class="fa-brands fa-whatsapp"></i>
                </a>
            </div>
        </div>
            <div className="cardsContainer">               
            
                <div className="cardsBox">

                    <ProjectCard
                        link="/totvs"
                        type="UX / UI"
                        client="TOTVS / WMS"
                        project="Fiscal Triangulation"
                        year="2020"
                        />

                    <ProjectCard
                        link="/bankinter"
                        type="UX Research / UX / UI"
                        client="Bankinter"
                        project="Onboarding Digital"
                        year="2019"
                        />

                    <ProjectCard
                        link="/santander"
                        type="UX Research / UX / UI"
                        client="Santander"
                        project="Open House"
                        year="2018"
                        />

                    <ProjectCard
                        link="/businessportugal"
                        type="Market Research"
                        client="Business Portugal"
                        project="Victor Barbershop"
                        year="2018"
                        />

                    <ProjectCard
                        link="/gazin"
                        type="UX / UI / Front-End"
                        client="Gazin Atacado"
                        project="Retails Blog"
                        year="2016"
                        />

                    <ProjectCard
                        link="/gazetacapas"
                        type="UX Research"
                        client="Gazeta do Povo"
                        project="Customizable News Homepages"
                        year="2015"
                        />

                    <ProjectCard
                        link="/freelaproject"
                        type="UX / UI"
                        client="Freelaproject"
                        project="Site & App"
                        year="2014"
                        />
                    
                    <ProjectCard
                        link="/kardshare"
                        type="UX / UI / Front-end"
                        client="Kardhsare"
                        project="App"
                        year="2013"
                        />
                        
                </div>
            </div>

            
        </>
    )
}

export default HomePage;