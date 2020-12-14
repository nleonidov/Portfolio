import { Link, Route } from 'react-router-dom'
import './Work.css';

export default function About(props) {

    return(
        <>
            <div className='headline-work'>
                <h1>Work</h1>
            </div>
            <div className='twobox'>
                <img id='project-2' src='/assets/project2.png'/>
                <p>I created an application called "Disco Donuts" which is a virtual coffee shop that allowed a user to navigate through the webpage and order items from the menu.</p>
                    <div className='one-links'>
                        <a className='app-one' target="_blank" href="https://frosty-bhabha-137380.netlify.app/">Live Site</a>
                            <br />
                        <a className='git-one' target="_blank" href="https://github.com/nleonidov/Disco-Donuts">Github</a>
                    </div>
            </div>
            <div className='threebox'>
                <img id='project-3' src='/assets/project3.png'/>
                <p>Working as a team with an assigned group of UX designers and programmers, we created an application for nurses to communicate between each other and provide a safe place to vent or gather thoughts.</p>
                    <div className='two-links'>
                        <a className='app-two' target="_blank" href="https://nurseline.netlify.app/">Live Site</a>
                            <br />
                        <a className='git-two' target="_blank" href="https://github.com/MakerMacAttack/nurse-line">Github</a>
                    </div>
            </div>
            <div className='fourbox'>
                <img id='project-4' src='/assets/project4.png'/>
                <p>My final project is a yelp-like review website for a virtual frozen yogurt shop where the user can leave a review after visiting and explore flavors and specials before visiting.</p>
                    <div className='three-links'>
                        <a className='app-three' target="_blank" href="http://softswerve.surge.sh/">Live Site</a>
                            <br />
                        <a className='git-three' target="_blank" href="https://github.com/nleonidov/Soft-Swerve">Github</a>
                    </div>
            </div>
        </>
    )
}