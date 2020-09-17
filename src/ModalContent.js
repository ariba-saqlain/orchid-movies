import React, { Component } from "react";

class ModalContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch(this.props.apiLink)
      .then((res) => res.json())

      .then((json) => {
        this.setState({
          isLoaded: true,
          items: this.state.items.concat(json),
        });
      });
  }

  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading..</div>;
    } else {
      return (
        <div>
          {items.map((item) => (
            <p>{item.Title}</p>
          ))}
        </div>
      );
    }
  }
}

export default ModalContent;
