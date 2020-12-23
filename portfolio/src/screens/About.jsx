import React from 'react'
import './About.css';

export default function About(props) {

    return (
        <>
            <div>
                <h1>About Me</h1>
                <div>
                    <p className='about-me'>I am a passionate and inquisitive software engineer seeking to delve deep into the realm of development. I believe the content I create should capture the core values and essential spirit of my clientele. I am driven to design applications that exhibit an elegant, yet efficient interface. </p>
                </div>
                <div>
                    <p className='about-bio'>As a graduate of General Assembly's 'Software Engineering Immersive' program, I learned a variety of skills throughout the 480 hours of rigorous training. I utilized an expeditious approach on designing and building a full-stack application with full CRUD functionality through the skills learned in this fast-paced environment.</p>
                </div>
                <div>
                    <p className='music-bio'>In my free time I like to compose electronic music and bring together components of noises together to create a journey through sound. </p>
                </div>
            </div>
        </>
    )
}