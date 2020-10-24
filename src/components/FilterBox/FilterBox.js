import React, { Component } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import "./FilterBox.css";

class FilterBox extends Component {
  constructor() {
    /* 1. Initialize Ref */
    super();
    this.textInput = React.createRef();
  }

  handleChange() {
    /* 3. Get Ref Value here */
    const searchValue = this.textInput.current.value;
    console.log(searchValue);
  }

  render() {
    return (
      <InputGroup className="mb-4">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-default">
            Search
          </InputGroup.Text>
        </InputGroup.Prepend>

        {/* 2. Attach Ref to FormControl component */}
        <FormControl
          aria-label="Search"
          aria-describedby="inputGroup-sizing-default"
          ref={this.textInput}
          type="text"
          onChange={() => this.handleChange()}
        />
      </InputGroup>
    );
  }
}

export default FilterBox;
