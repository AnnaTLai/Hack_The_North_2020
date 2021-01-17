import React, { useContext } from "react";
import { Grid, Container, TextField, Link } from "@material-ui/core";
import "./Login.css";
import { NavbarContext } from "../NavbarContext"
import logo from "../logo.png";

export default function Login() {

  return (
    <div className="background">
        <Link href="/" variant="body2">
          <text className="back-to-home">{"< Back to Home"}</text>
        </Link>
      <text className="whiteheading">
        {" "}
        Shoot for the moon, but do it together {" "}
      </text>
      <Container>
        <form className="whitebackground">
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12}>
              <img src={logo} className="image" alt="logo"/>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <div className="text-container">
                    <text className="text"> Email </text>
                  </div>
                  <div className="text-field">
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      size="small"
                      variant="outlined"
                    />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className="text-container">
                    <text className="text"> Password </text>
                  </div>
                  <div className="text-field">
                    <TextField
                      fullWidth
                      label="Password"
                      name="password"
                      size="small"
                      type="password"
                      variant="outlined"
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>

              <Grid item xs={12} alignItems="center">
                <div className="submit-button">
                  <Link href="/dashboard" variant="body2">
                    <text className="button">Submit</text>
                  </Link>
                </div>
            </Grid>                

            <Grid item xs={12}>
              <div className="submit-button">
                <Link href="#" variant="body2">
                  {"Don't have an account yet? Sign up here!"}
                </Link>
              </div>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
}

