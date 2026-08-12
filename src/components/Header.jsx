import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { LOGO_URL } from '../utils/constants'

const Header = () => {
    const [ btnName, setBtnName ] = useState('Login');
    const handleLogin = () => {
        btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login');
    }
    return(
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL}></img>
            </div>
            <div className='nav-items'>
                <Link className='nav-item' to="/">
                    Home
                </Link>
                <Link className='nav-item' to="/about">
                    About
                </Link>
                <Link className='nav-item' to="/contact">
                    Contact
                </Link>
                <Link className='nav-item' to="/contact">
                    Cart
                </Link>
                <button className='login-btn' onClick={handleLogin}>{btnName}</button>
                
            </div>
        </div>
    )
}

export default Header;