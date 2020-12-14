import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <div className='main-header'>
            <div className='header'>
                <div className='main-links'>
                    <ul className='header-item'>
                        <li className='home'><Link to='/'><a>Home</a></Link></li>
                        <li className='about'><Link to='/about'><a>About</a></Link></li>
                        <li className='work'><Link to='/work'><a>Work</a></Link></li>
                        <li className='contact'><Link to='/contact'><a>Contact</a></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}