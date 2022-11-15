import React from 'react';
import './Nav.css'
import {Link} from 'react-router-dom'

export default function Nav (props) {
    return (
        <nav className='NavBar'>
            <Link>
            <img src='https://www.freeiconspng.com/thumbs/youtube-logo-png/youtube-logo-drawn-7.png'/>
            </Link>
            <Link exact to='/'>
                Home
            </Link>
            <Link to='/About'>
                About
            </Link>

        </nav>
    );
}

