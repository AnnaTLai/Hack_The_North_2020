import React, { Component } from 'react'

export default class CreateProjects extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: 'CreateProjects'                 
        }
    }

    render() {
        return (
            <div>
                <h1> {this.state.title} </h1>
            </div>
        )
    }
}