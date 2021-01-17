import React, { Component } from "react";
import { Grid, Button, Container, TextField, Link } from "@material-ui/core";
import "./Login.css";
import logo from "../logo.png";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.State = {
      title: "User login page",
      loginoage: true,
    };
  }

  render() {
    return (
      <div className="background">
          <Link href="/" variant="body2">
                  {"< Back to Home"}
                </Link>
        <text className="whiteheading">
          {" "}
          Shoot for the moon, but do it together{" "}
        </text>
        <Container>
          <form className="whitebackground">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <img src={logo} className="image" />
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <text className="text"> Name </text>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      ize="small"
                      variant="outlined"
                      margin="8"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <text className="text"> Password </text>
                    <TextField
                      fullWidth
                      label="Password"
                      name="password"
                      size="small"
                      type="password"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </Grid>

               <Grid item xs={12}>
              <button className = 'button'
                >
                  <text className = 'buttonfont'> LOGIN</text>
                </button>
              </Grid>                

              <Grid item xs={12}>
                <Link href="#" variant="body2">
                  {"Don't have an accout Yet? Sign Up here"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Container>
      </div>
    );
  }
}
