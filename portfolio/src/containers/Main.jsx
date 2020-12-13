import React from 'react'
import { Link } from 'react-router-dom'

import './Main.css';

function Main() {

    return(
        <>
            <div className='purpose'>
                <h1>Purpose</h1>
                <p>I am an enthusiastic and determined software engineer with a . I have a strong passion for expressing my creativity and designing new features.</p>
            </div>
            <div className='tech-stack'>
                <h1>Tech Stack</h1>
                <p>Currently working with JavaScript, CSS, HTML, React, Ruby, Rails, Express, SQL and PostgreSQL. The ability to customize user interface is what I enjoy.</p>
            </div>
        </>
    )
}

export default Main;