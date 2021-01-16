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
                <h2>Project Name</h2>
                <form>
                    Name:
                    <input type="text" name="name" />
                    Project Media:
                    <input type="file" name="fileToUpload" id="fileToUpload"/>
                    Project Description:
                    <input type="text" name="proj-description"/>
                    Who We Are Looking For:
                    <input type="text" name="looking-for"/>
                    <input type="submit" value="Submit" name="submit"></input>
                </form>
            </div>
        )
    }
}

