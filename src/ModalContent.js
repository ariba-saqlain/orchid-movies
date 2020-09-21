import React, { Component } from "react";
import { Modal } from "react-bootstrap";

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
          <Modal.Header closeButton>
            <Modal.Title>
              {items.map((item) => (
                <h4 class="mb-0">{item.Title}</h4>
              ))}
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {items.map((item) => (
              <div>
                <p>
                  {item.Rated} | {item.Runtime} | {item.Genre}
                </p>
                <p>{item.Plot}</p>
              </div>
            ))}
          </Modal.Body>
        </div>
      );
    }
  }
}

export default ModalContent;
