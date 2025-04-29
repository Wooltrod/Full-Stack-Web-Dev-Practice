import React from "react";
import ReactDOM from "react-dom";
import Pi, { doublePi, triplePi } from "./math.js";

ReactDOM.render(
  <ul>
    <li>{Pi}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
