import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./ProjectPage.css";
import project from "./homepage-components/dataservice.js";

export default class ProjectPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Project details",
    };
  }

  render() {
    return (
      <div className="bigrow">
        <Container>
          <Row>
            <Col xs={6}>
              <div>
                <p className="title"> {project.name} </p>
                <img src={project.img} height="330" width="auto"></img>
                <p className="heading"> Project Description</p>
                <p className="body"> Category: {project.cat}</p>
                <p className="body"> {project.des} </p>
                <p className="heading">
                  Who are we looking for? ({project.mem} more members)
                </p>
                <p className="body">{project.lookingfor} </p>
              </div>
            </Col>

            <Col>
              <div>
                <p className="heading"> About {project.event} </p>
                <p className="body"> {project.ppl_des}</p>
                <p className="body"> Contact me: {project.email}</p>
                <p className="heading2">
                  {" "}
                  Our Team {project.max_team - project.mem}/ {project.max_team}{" "}
                  members found
                </p>
              </div>
              <Row>
                <Col>Ashley Lim</Col>
                <Col>Tonny Packer</Col>
                <Col>Jimmy Chow</Col>
                <Col>Tina Smith</Col>
                <Col> Daniel Yang</Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}