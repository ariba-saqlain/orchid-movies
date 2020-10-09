import React, { Component } from "react";
import Poster from "../Poster/Poster";
import { Row } from "react-bootstrap";

class Grid extends Component {
  tvList = [
    {
      id: "a",
      title: "Black Mirror",
      src: require("../../images/tvshow-images/blackMirror.jpg"),
      apiLink: "http://omdbapi.com/?i=tt2085059&apikey=1001f938",
    },
    {
      id: "b",
      title: "Breaking Bad",
      src: require("../../images/tvshow-images/breakingBad.jpg"),
      apiLink: "http://omdbapi.com/?i=tt0903747&apikey=1001f938",
    },
    {
      id: "c",
      title: "Dexter",
      src: require("../../images/tvshow-images/dexter.jpg"),
      apiLink: "http://omdbapi.com/?i=tt0773262&apikey=1001f938",
    },
    {
      id: "d",
      title: "Friends",
      src: require("../../images/tvshow-images/friends.jpg"),
      apiLink: "http://omdbapi.com/?i=tt0108778&apikey=1001f938",
    },
    {
      id: "e",
      title: "Grey's Anatomy",
      src: require("../../images/tvshow-images/greysAnatomy.jpg"),
      apiLink: "http://omdbapi.com/?i=tt0413573&apikey=1001f938",
    },
    {
      id: "f",
      title: "How I Met Your Mother",
      src: require("../../images/tvshow-images/howIMetYourMother.jpg"),
      apiLink: "http://omdbapi.com/?i=tt0460649&apikey=1001f938",
    },
    {
      id: "g",
      title: "How To Get Away With Murder",
      src: require("../../images/tvshow-images/howToGetAwayWithMurder.jpg"),
      apiLink: "http://omdbapi.com/?i=tt3205802&apikey=1001f938",
    },
    {
      id: "h",
      title: "Prison Break",
      src: require("../../images/tvshow-images/prisonBreak.jpg"),
      apiLink: "http://omdbapi.com/?i=tt0455275&apikey=1001f938",
    },
    {
      id: "i",
      title: "Riverdale",
      src: require("../../images/tvshow-images/riverdale.jpg"),
      apiLink: "http://omdbapi.com/?i=tt5420376&apikey=1001f938",
    },
    {
      id: "j",
      title: "Stranger Things",
      src: require("../../images/tvshow-images/strangerThings.jpg"),
      apiLink: "http://omdbapi.com/?i=tt4574334&apikey=1001f938",
    },
    {
      id: "k",
      title: "The 100",
      src: require("../../images/tvshow-images/the100.jpg"),
      apiLink: "http://omdbapi.com/?i=tt2661044&apikey=1001f938",
    },
    {
      id: "l",
      title: "The Good Place",
      src: require("../../images/tvshow-images/theGoodPlace.jpg"),
      apiLink: "http://omdbapi.com/?i=tt4955642&apikey=1001f938",
    },
    {
      id: "m",
      title: "The Office",
      src: require("../../images/tvshow-images/theOffice.jpg"),
      apiLink: "http://omdbapi.com/?i=tt0386676&apikey=1001f938",
    },
    {
      id: "n",
      title: "This is Us",
      src: require("../../images/tvshow-images/thisIsUs.jpg"),
      apiLink: "http://omdbapi.com/?i=tt5555260&apikey=1001f938",
    },
  ];

  render() {
    return (
      <Row>
        {this.tvList.map((item) => (
          <Poster src={item.src} apiLink={item.apiLink} />
        ))}
      </Row>
    );
  }
}

export default Grid;
