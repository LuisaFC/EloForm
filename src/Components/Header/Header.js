import React from 'react';
import logo from '../../img/EloGroup.png';

const Header = ()=>{
    return(
        <nav>
            <div className="nav-wrapper  blue-grey darken-1" >
                <a href="/" className="brand-logo">EloForm</a>
                <img src={logo} alt="Logo" className="logo right"/>
            </div>
        </nav>
    )
}

export default Header;