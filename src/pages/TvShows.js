import React, { Component } from "react";
import MyNavbar from "../components/MyNavbar/MyNavbar";
import Header from "../components/Header/Header";
import FilterBox from "../components/FilterBox/FilterBox";
import Grid from "../components/Grid/Grid";
import { Container } from "react-bootstrap";

class TvShows extends Component {
  render() {
    return (
      <div>
        <MyNavbar />
        <Container>
          <Header title={"TV Shows"} />
          <FilterBox />
          <Grid />
        </Container>
      </div>
    );
  }
}

export default TvShows;
