import React from "react"; //var React = require("react");
import ReactDOM from "react-dom"; //var ReactDOM = require("react-dom");

/*ReactDOM.render() takes three inputs:
WHAT TO SHOW (e.g. <h1>Hello World</h1>),
WHERE TO SHOW IT (document.getElementById("root"),)*/

ReactDOM.render(
  <div>
    <h1>My Favorite Movies</h1>
    <ul>
      <li>Dinosaur</li>
      <li>Little Miss Sunshine</li>
      <li>Teen Beach Movie</li>
    </ul>
  </div>,
  document.getElementById("root")
);
