import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import HomePage from './pages/homepage';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Bankinter from './pages/project_Bankinter';
import Santander from './pages/project_OpenHouse';
import Totvs from './pages/project_Totvs';
import BusinessPortugal from './pages/project_BusinessPortugal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/bankinter' element={<Bankinter />} />
            <Route path='/santander' element={<Santander />} />
            <Route path='/totvs' element={<Totvs />} />
            <Route path='/businessportugal' element={<BusinessPortugal />} />
        </Routes>
  </BrowserRouter>

);
