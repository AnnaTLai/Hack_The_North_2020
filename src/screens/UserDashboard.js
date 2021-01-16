import React, { Component } from 'react'

export default class UserDashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: 'User Dashboard'                 
        }
    }

    render() {
        return (
            <div>
                <h1> {this.state.title }</h1>
                <p> Welcome ,user </p>
            </div>
        )
    }
}