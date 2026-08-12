import React from 'react'
import { LOGO_URL } from '../utils/constants'

const Header = () => {
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
            </div>
        </div>
    )
}

export default Header;