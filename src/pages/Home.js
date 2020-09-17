import React, { Component } from "react";
import MyNavbar from "../components/MyNavbar/MyNavbar";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div class="bg">
        <MyNavbar />
        <div class="row">
          <div class="col"></div>
          <div class="col-8">
            <h2 class="home2">WELCOME TO</h2>
            <h1 class="home1">ORCHID MOVIES</h1>
          </div>
          <div class="col"></div>
        </div>
      </div>
    );
  }
}

export default Home;
