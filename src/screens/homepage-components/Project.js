import React from 'react'
import { Link } from 'react-router-dom'
import './Project.css';


export default function Project({id, name, img, school, cat}) {
    return (
        <article className="project">
            <div className="img-container">
                <img src={img} alt={name} className="project-img" />
            </div>
            <div className="project-footer">
                <h2>{name}</h2>
                <h3>{cat}</h3>
                <h3>{school}</h3>
                <Link to={'/project'} className="project-link-button" >
                    More Details
                </Link>
            </div>
        </article>
    )
}