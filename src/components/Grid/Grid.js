import React from "react";
import Poster from "../Poster/Poster";
import { Row } from "react-bootstrap";

export function Grid({ list, searchValue }) {
  const filteredList = list.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Row>
      {filteredList.map((item) => (
        <Poster src={item.src} apiLink={item.apiLink} key={item.uniqueId} />
      ))}
    </Row>
  );
}

export default Grid;
