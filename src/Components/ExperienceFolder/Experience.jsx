import React from 'react'
import '../ExperienceFolder/Experience.css'
import htmlLogo from "../../assets/html.png"
import cssLogo from "../../assets/css.png"
import reactLogo from "../../assets/react.svg"
import reduxLogo from "../../assets/logo-redux.webp"
import jsLogo from "../../assets/javascript.png"
import tsLogo from "../../assets/typescript.png"
import tailwindLogo from "../../assets/tailwind.png"
import unityLogo from "../../assets/unity.png"
import figmaLogo from "../../assets/figma.png"
import githubLogo from "../../assets/github.png"
 
function Experience() {

    const skillList = [
        { id: 1, src: htmlLogo, alt: "HTML" },
        { id: 2, src: cssLogo, alt: "CSS" },
        { id: 3, src: reactLogo, alt: "REACT" },
        { id: 4, src: reduxLogo, alt: "REDUX" },
        { id: 5, src: jsLogo, alt: "JAVASCRİPT" },
        { id: 6, src: tsLogo, alt: "TYPESCRİPT" },
        { id: 7, src: tailwindLogo, alt: "TAİLWİND" },
        { id: 8, src: unityLogo, alt: "UNİTY" },
        { id: 9, src: figmaLogo, alt: "FİGMA" },
        { id: 10, src: githubLogo, alt: "GİTHUB" },

    ];



    return (
        <div id='skills' className='skillsCnt'>
            <h3>Skills</h3>
            <div data-aos="fade-up" className='skills'>
                {skillList.map(logo => (
                    <div key={logo.id} className='logos'>
                        <div className='logo' key={logo.id}>
                            <img src={logo.src} alt={logo.alt} />
                        </div>
                        <p>{logo.alt}</p>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Experience
