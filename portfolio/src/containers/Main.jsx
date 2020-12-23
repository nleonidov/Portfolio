import React from 'react'
import { Link } from 'react-router-dom'

import './Main.css';

function Main() {

    return(
        <>
            <div className='main-pic'>
                <img id='me' src='/assets/image.jpg'/>
            </div>
            <div>
                <h1 className='name'>Nick Leonidov</h1>
                <h3 className='job'>SOFTWARE ENGINEER</h3>
            </div>
                <hr className='line-break'/>
            <div className='tech-stack'>
                <h1>Tech Stack</h1>
            </div>
            <div>
                <p className='stack-bio'>Currently working with JavaScript, CSS, HTML, React, Ruby, Rails, Express, SQL and PostgreSQL. The ability to customize user interface is what I enjoy.</p>
                <button className='work-button'><Link className='work-link' to='/work'> View Work </Link></button>
            </div>

            <div className='who'>
                <h1>Motivation</h1>
            </div>
            <div>
                <p className='who-bio'>I am a passionate and inquisitive software engineer seeking to delve deep into the realm of development. I believe the content I create should capture the core values and essential spirit of my clientele. I am driven to design applications that exhibit an elegant, yet efficient interface. </p>
                <button className='who-button'><Link className='who-link' to='/about'> More About Nick </Link></button>
            </div>
        </>
    )
}

export default Main;