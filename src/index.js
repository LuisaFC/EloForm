import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home/Home';
import './index.css';

import {BrowserRouter, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    
    <BrowserRouter>
        <Route path='/' exact={true} component={Home} />
    </BrowserRouter>,


    document.getElementById('root')

);

serviceWorker.unregister();
