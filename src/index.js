import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import HomePage from './pages/homepage';
import {HashRouter, Route, Routes} from "react-router-dom";

import Bankinter from './pages/project_Bankinter';
import Santander from './pages/project_OpenHouse';
import Totvs from './pages/project_Totvs';
import BusinessPortugal from './pages/project_BusinessPortugal';
import GazetaDoPovoCapas from './pages/project_GazetaDoPovoCapas';
import Gazin from './pages/project_Gazin';
import FreelaPj from './pages/project_Freela';
import Kardshare from './pages/project_Kardshare';
import NearPhotos from './pages/project_Nearphotos';

import ReactGA from 'react-ga';
ReactGA.initialize('G-8DDE9ZBW1Q');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
        <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/bankinter' element={<Bankinter />} />
            <Route path='/santander' element={<Santander />} />
            <Route path='/totvs' element={<Totvs />} />
            <Route path='/businessportugal' element={<BusinessPortugal />} />
            <Route path='/gazetacapas' element={<GazetaDoPovoCapas />} />
            <Route path='/gazin' element={<Gazin />} />
            <Route path='/freelaproject' element={<FreelaPj />} />
            <Route path='/kardshare' element={<Kardshare />} />
            <Route path='/nearphotos' element={<NearPhotos />} />

            
            
        </Routes>
  </HashRouter>

);
