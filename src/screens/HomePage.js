import React, { Component } from 'react'

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
                <h1> {this.state.title }</h1>
            </div>
        )
    }
}