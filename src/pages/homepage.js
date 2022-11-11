import React from "react";
import SuperTitle from "../components/superTitle";

import {BrowserRouter, Route, Routes, Link} from "react-router-dom";

import PjBk from "../images/link-bk.png";
import PjSt from "../images/link-st.png";
import PjTt from "../images/link-tt.png";
import PjBp from "../images/link-bp.png";
import PjGp from "../images/link-gp.png";
import PjBvDev from "../images/link-bv-dev.png";

import Me from "../images/me.png";

function HomePage(){
    return(
        
        <div className='body'>

        <img src={Me} alt="Daniel de Oliveira Carvalho photo" width="150" className="profilephoto" />
        <SuperTitle value="Hi! I'm Daniel. I've been working as a Designer since 2007, and as a UX Designer since 2014." />

        <h2 className="superTitleBody">
        In the past years my main actuation was as a UX Designer and Researcher, applying design thinking methodologies for new and ongoing business.
        </h2>
        <h2 className="superTitleBody">
        I'm also working as a Front-End developer, developing with HTML, CSS, Javascript ES6+, TypeScript, MySQL, PHP (wordpress) and ReactJS.
        </h2>
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
        
        <h2 className='projects'>UX Design Projects</h2>
            <Link to="/bankinter">
                <img src={PjBk} className="linkProject" />
            </Link>
            <Link to="/santander">
                <img src={PjSt} className="linkProject" />
            </Link>
            <Link to="/totvs">
                <img src={PjTt} className="linkProject" />
            </Link>
            <Link to="/businessportugal">
                <img src={PjBp} className="linkProject" />
            </Link>

            <Link to="/gazetacapas">
                <img src={PjGp} className="linkProject" />
            </Link>
            

            <h2 className='projects'>Developer Projects</h2>
            <a href="https://blog.gazinatacado.com.br/" target="_blank">
                <img src={PjBvDev} alt="Blog do Varejo - Desenvolvimento Wordpress" className="linkProject" />
            </a>
        </div>
    )
}

export default HomePage;