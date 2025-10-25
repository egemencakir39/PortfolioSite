import React from 'react'
import './Intro.css'
import profilResmi from '../../assets/egemencakir.jpeg';
import Typewriter from 'typewriter-effect';

function Intro() {
    return (
        <div className='container'>
            <div className='header-info'>
                <h1>
                    <Typewriter
                        options={{
                            strings: ["Hi, I'm Egemen", "I'm Frontend Developer", "I'm Game Developer"],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>
                <p>I’m a frontend developer focused on building modern web apps with React.
                    I also develop indie games using Unity.
                    Reach out if you’d like to collaborate or learn more.</p>
                    <a href="/egemen-cakir-cv.pdf" download>
                    <button>Download CV</button>
                    </a>
                
            </div>
            <div className='image'>
                <img src={profilResmi} alt="" />
            </div>
        </div>
    )
}

export default Intro
