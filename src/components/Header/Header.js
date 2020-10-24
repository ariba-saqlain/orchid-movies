import React, { Component } from "react";

class Header extends Component {
  styles = {
    fontSize: "calc(20px + 3vw)",
    color: "dimgrey",
  };

  render() {
    return (
      <h1 style={this.styles} className="text-center mt-5 mb-4">
        {this.props.title}
      </h1>
    );
  }
}

export default Header;
