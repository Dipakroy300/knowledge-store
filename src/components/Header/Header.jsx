import React from 'react';
import './Header.css';
import logo from '../images/download2.jpeg'
const Header = () => {
    return (
        <div className='container'>
            <nav className='header'>
                <h1>Knowledge Craft</h1>
                <img src={logo} alt="" />
               </nav>
               <hr />
        </div>
    )
       
};

export default Header;