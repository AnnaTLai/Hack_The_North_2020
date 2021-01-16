import React, { Component } from 'react'

export default class ProjectPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: 'Projects available'                 
        }
    }

    render() {
        return (
            <div>
                <h1> {this.state.title }</h1>
                <p> Project 1 </p>
                <p> Project 2 </p>
                <p> Project 3 </p>
            </div>
        )
    }
}