import React, { Component } from 'react'
import './CreateProject.css'

export default class CreateProjects extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: 'CreateProjects'                 
        }
    }

    render() {
        return (
            <div className="wrapper">
                <div className="createproj-section">
                <h2>Let’s get you ready for take-off.</h2>
                <form className="projectName">
                    <label className="label-text">Project Name:</label>
                    <input type="text" name="name" className="input-text" placeholder="Hack the North"/>
                </form>
                <form className="projectMedia">
                    <label className="label-text">Project Media:</label>
                    <input type="file" name="fileToUpload" id="fileToUpload"/>
                </form>
                <form className="projectDescription">
                    <label className="label-text">Project Description:</label>
                    <input type="text" name="proj-description" className="input-text" placeholder="Please write the project description."/>
                </form>
                <form className="contactInfo">
                    <label className="label-text">Contact Info:</label>
                    <input type="text" name="proj-description" className="input-text" placeholder="Please write your contact information."/>
                </form>
                <form className="whoWe">
                    <label className="label-text">Who We Are Looking For:</label>
                    <input type="text" name="looking-for" className="input-text" placeholder="Who would you like to work with?"/>
                    <div className="button-wrap">
                        <input type="submit" value="Submit" name="submit" className="send-button"></input>
                    </div>
                </form>
            </div>
            </div>
        )
    }
}

