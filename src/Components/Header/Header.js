import React, {Component} from 'react';
import Logo from '../../img/EloGroup.png';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const Header = ()=>{
    return(
        <AppBar position="static">
            <Toolbar>
                <img src={Logo} alt="Logo" className="Logo" position="right"/>
            </Toolbar>
        </AppBar>
    );
}


export default Header;