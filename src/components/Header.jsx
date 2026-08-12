import React from 'react'
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
                <ul>Home</ul>
                <ul>About Us</ul>
                <ul>Contact Us</ul>
                <ul>Cart</ul>
                <button className='login-btn' onClick={handleLogin}>{btnName}</button>
            </div>
        </div>
    )
}

export default Header;