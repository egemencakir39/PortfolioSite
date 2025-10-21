import React from 'react'
import '../ProjectsFolder/Projects.css'
import projects1 from "../../assets/WeatherApp.png"
import projects2 from "../../assets/2.png"
import projects3 from "../../assets/3.png"

function Projects() {


    const projectList = [
        { id: 1,link:"https://velvety-mermaid-970534.netlify.app",Slink:"https://github.com/egemencakir39/weatherApp-React-redux", src: projects1, alt: "png", live: "1", source: "1", title: "WeatherApp", desc: "A weather app where users can select a city directly from the map of Turkey and instantly view its weather information." },
        { id: 2,link:"https://github.com/egemencakir39/NewsWebSite", Slink:"https://github.com/egemencakir39/NewsWebSite",src: projects2, alt: "png", live: "1", source: "1", title: "NewsWebSite", desc: "A modern news website built with TypeScript and React, featuring live currency updates and dynamic news content with category filtering." },
        { id: 3,link:"https://exquisite-tarsier-6c848b.netlify.app",Slink:"https://github.com/egemencakir39/e-commerece-projects-react", src: projects3, alt: "png", live: "1", source: "1", title: "E-Commerece", desc: "A basic e-commerce website built with React, featuring product listing, filtering and a functional shopping cart." },
    ]

    return (
        <div id="projects" className='projectCnt'>
            <h3>Projects</h3>
            <div data-aos="zoom-in" className='project'>
                {projectList.map(project => (
                    <div key={project.id} className='projectBox'>
                        <img src={project.src} alt={project.alt} />
                        <h4>{project.title}</h4>
                        <p>{project.desc}</p>
                        <div className='btnList'>
                            <button onClick={()=>window.open(project.link,"_blank")}>Live</button>
                            <button onClick={()=>window.open(project.Slink,"_blank")}>Source</button>
                        </div>
                    </div>
                ))}

            </div>


        </div>
    )
}

export default Projects
