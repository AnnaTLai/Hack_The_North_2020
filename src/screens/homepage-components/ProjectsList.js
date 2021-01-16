import React, { useState } from 'react'
import Project from './Project'
import projs from './data'
import './ProjectsList.css'

export default function ProjectsList () {
    const [projects, setProjects] = useState(projs) // projs = list of projects

    return (
        <section className="section">
            <h2 className="section-title">Projects</h2>
            <div className="projects-center">
                {projects.map((item) => {
                    return (
                        <Project key={item.id} {...item}/>
                    )
                })}
            </div>
        </section>
    )
}