import React, { Component } from 'react'
import ProjectsList from './homepage-components/ProjectsList'
import './HomePage.css'

export default class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Homepage'                 
        }
    }
    render() {
        return (
            <div>
                <ProjectsList />
            </div>
        )
    }
}