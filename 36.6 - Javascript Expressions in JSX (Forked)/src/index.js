import React from "react";
import ReactDOM from "react-dom";

const name = "Ian";
const luckyNumber = 7;

ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>Your lucky number is {luckyNumber}</p>
  </div>,
  document.getElementById("root")
);
