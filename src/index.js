import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import HomePage from './pages/homepage';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Bankinter from './pages/project_Bankinter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/bankinter' element={<Bankinter />} />
        </Routes>
  </BrowserRouter>

);
