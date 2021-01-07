import React, { Fragment, useEffect, useRef } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import "./Search.css";

export function Search({ searchValue, setsearchValue }) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleChange(event) {
    setsearchValue(event.target.value);
  }

  return (
    <Fragment>
      <InputGroup className="mb-4">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-default">
            Search
          </InputGroup.Text>
        </InputGroup.Prepend>

        <FormControl
          aria-label="Search"
          aria-describedby="inputGroup-sizing-default"
          ref={inputRef}
          type="text"
          value={searchValue}
          onChange={handleChange}
        />
      </InputGroup>
    </Fragment>
  );
}

export default Search;
