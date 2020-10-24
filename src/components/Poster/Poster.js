import React, { Component } from "react";
import { Modal, Col, Image } from "react-bootstrap";
import ModalContent from "../../ModalContent";
import "./Poster.css";

// image size = 666 x 1000

class Poster extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lgShow: false,
    };
  }

  render() {
    let lgClose = () => this.setState({ lgShow: false });

    return (
      <Col xs={6} sm={4} md={3}>
        <div
          className="mb-4 box"
          onClick={() => this.setState({ lgShow: true })}
        >
          <Image src={this.props.src} fluid />
        </div>

        <Modal size="lg" show={this.state.lgShow} onHide={lgClose}>
          <ModalContent apiLink={this.props.apiLink}></ModalContent>
        </Modal>
      </Col>
    );
  }
}

export default Poster;
