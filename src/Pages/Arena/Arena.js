import React from "react";
import { content } from "./Content";
import Card from "./Card";

import "./Arena.css";

function Arena() {
  function createCard(props) {
    return (
      <Card
        key={props.id}
        address={props.address}
        name={props.name}
        description={props.description}
      />
    );
  }
  return (
    <div>
      <h1>
        <span>
          <h1 class="arena-title" style={{ fontSize: "26px", color: "black" }}>
            Some of the Arenas
          </h1>
        </span>
      </h1>
      <dl>{content.map(createCard)}</dl>
    </div>
  );
}

export default Arena;
