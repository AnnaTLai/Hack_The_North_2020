import React, { useState } from 'react'
import './UserDashboard.css'
import Projects from './homepage-components/Project'
import projs from './homepage-components/data'

export default function UserDashboard () {
    
    return (
        <div className="user-dashboard">
            <div className="title">
                <h1>Hello, Hack The North</h1>
            </div>
            <article>
                <h3>My Projects</h3>
                <div className="proj">
                    {projs.slice(1, 4).map((item) => {
                        return (
                        <Projects key={item.id} {...item}/>
                        )
                    })}
                </div>
                <h3>Your Favorites</h3>
                <div className="proj">
                    {projs.slice(4, 7).map((item) => {
                        return (
                        <Projects key={item.id} {...item}/>
                        )
                    })}
                </div>
            </article>
        </div>
    )
}