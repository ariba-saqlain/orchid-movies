import React, { Fragment, useState } from "react";
import MyNavbar from "../components/MyNavbar/MyNavbar";
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import Grid from "../components/Grid/Grid";
import { Container } from "react-bootstrap";

// Data;
import { movieList } from "../data/movieList";

function Movies() {
  const [searchValue, setsearchValue] = useState("");

  return (
    <Fragment>
      <div class="bg-other">
        <MyNavbar />
        <Container>
          <Header title={"Movies"} />
          <Search searchValue={searchValue} setsearchValue={setsearchValue} />
        </Container>
      </div>
      <Container>
        <Grid list={movieList} searchValue={searchValue} />
      </Container>
    </Fragment>
  );
}

export default Movies;
