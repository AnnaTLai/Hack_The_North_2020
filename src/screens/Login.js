import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: 'User login page'                 
        }
    }

    render() {
        return (
            <div>
                <h1> {this.state.title }</h1>
            </div>
        )
    }
}