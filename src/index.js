import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Pages/Home';
import './index.css';

import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
    
    <BrowserRouter>
        <Route path='/' exact={true} component={Home} />
    </BrowserRouter>,


    document.getElementById('root')

);

