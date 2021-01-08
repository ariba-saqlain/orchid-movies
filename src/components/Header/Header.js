import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return <h1 className="text-center mt-5 mb-4">{this.props.title}</h1>;
  }
}

export default Header;
