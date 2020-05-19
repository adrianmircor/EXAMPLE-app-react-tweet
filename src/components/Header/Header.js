import React from 'react';
import twitterLogo from '../../assets/img/4.1_twitter-logo.png'
import './Header.scss'

const Header = () => {
    return (  
        <div className="header">
            <img src={twitterLogo} alt="tuit" />
            <h1>Tuits Simulator</h1>
        </div>
    );
}

 
export default Header;