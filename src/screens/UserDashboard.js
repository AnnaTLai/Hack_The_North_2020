import React, { Component } from 'react'
import './UserDashboard.css'

export default class UserDashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: 'Hello, Hack The North'                 
        }
    }

    render() {
        return (
            <div className="user-dashboard">
                <div className="title">
                    <h1> {this.state.title }</h1>
                </div>
                <article className="project-section">
                    <div>
                        hi
                    </div>
                </article>
                <article className="project-section">
                    <div>
                        hi
                    </div>
                </article>
            </div>
        )
    }
}