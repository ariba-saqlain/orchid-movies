import React, { Component } from "react";
import MyNavbar from "../components/MyNavbar/MyNavbar";
import Header from "../components/Header/Header";
import Grid from "../components/Grid/Grid";
import { Container } from "react-bootstrap";

class TvShows extends Component {
  render() {
    return (
      <div>
        <MyNavbar />
        <Container>
          <Header title={"TV Shows"} />
          <Grid />
        </Container>
      </div>
    );
  }
}

export default TvShows;
