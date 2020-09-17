import React, { Component } from "react";
import Poster from "../Image/Poster";
import { Row } from "react-bootstrap";

class Grid extends Component {
  // size = 666 x 1000
  posterImage = {
    blackMirror: require("../../images/tvshow-images/blackMirror.jpg"),
    breakingBad: require("../../images/tvshow-images/breakingBad.jpg"),
    dexter: require("../../images/tvshow-images/dexter.jpg"),
    friends: require("../../images/tvshow-images/friends.jpg"),
    greysAnatomy: require("../../images/tvshow-images/greysAnatomy.jpg"),
    howIMetYourMother: require("../../images/tvshow-images/howIMetYourMother.jpg"),
    howToGetAwayWithMurder: require("../../images/tvshow-images/howToGetAwayWithMurder.jpg"),
    prisonBreak: require("../../images/tvshow-images/prisonBreak.jpg"),
    riverdale: require("../../images/tvshow-images/riverdale.jpg"),
    strangerThings: require("../../images/tvshow-images/strangerThings.jpg"),
    the100: require("../../images/tvshow-images/the100.jpg"),
    theGoodPlace: require("../../images/tvshow-images/theGoodPlace.jpg"),
    theOffice: require("../../images/tvshow-images/theOffice.jpg"),
    thisIsUs: require("../../images/tvshow-images/thisIsUs.jpg"),
  };

  apiLink = {
    blackMirrorLink: "http://omdbapi.com/?i=tt2085059&apikey=1001f938",
    breakingBadLink: "http://omdbapi.com/?i=tt0903747&apikey=1001f938",
    dexterLink: "http://omdbapi.com/?i=tt0773262&apikey=1001f938",
    friendsLink: "http://omdbapi.com/?i=tt0108778&apikey=1001f938",
    greysAnatomyLink: "http://omdbapi.com/?i=tt0413573&apikey=1001f938",
    howIMetYourMotherLink: "http://omdbapi.com/?i=tt0460649&apikey=1001f938",
    howToGetAwayWithMurderLink:
      "http://omdbapi.com/?i=tt3205802&apikey=1001f938",
    prisonBreakLink: "http://omdbapi.com/?i=tt0455275&apikey=1001f938",
    riverdaleLink: "http://omdbapi.com/?i=tt5420376&apikey=1001f938",
    strangerThingsLink: "http://omdbapi.com/?i=tt4574334&apikey=1001f938",
    the100Link: "http://omdbapi.com/?i=tt2661044&apikey=1001f938",
    theGoodPlaceLink: "http://omdbapi.com/?i=tt4955642&apikey=1001f938",
    theOfficeLink: "http://omdbapi.com/?i=tt0386676&apikey=1001f938",
    thisIsUsLink: "http://omdbapi.com/?i=tt5555260&apikey=1001f938",
  };

  render() {
    return (
      <Row>
        <Poster
          src={this.posterImage.blackMirror}
          apiLink={this.apiLink.blackMirrorLink}
        />
        <Poster
          src={this.posterImage.breakingBad}
          apiLink={this.apiLink.breakingBadLink}
        />
        <Poster
          src={this.posterImage.dexter}
          apiLink={this.apiLink.dexterLink}
        />
        <Poster
          src={this.posterImage.friends}
          apiLink={this.apiLink.friendsLink}
        />
        <Poster
          src={this.posterImage.greysAnatomy}
          apiLink={this.apiLink.greysAnatomyLink}
        />
        <Poster
          src={this.posterImage.howIMetYourMother}
          apiLink={this.apiLink.howIMetYourMotherLink}
        />
      </Row>
    );
  }
}

export default Grid;
