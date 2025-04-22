import React from "react"; //var React = require("react");
import ReactDOM from "react-dom"; //var ReactDOM = require("react-dom");

/*ReactDOM.render() takes three inputs:
WHAT TO SHOW (e.g. <h1>Hello World</h1>),
WHERE TO SHOW IT (document.getElementById("root"),)*/

ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <p>This is a paragraph.</p>
  </div>,
  document.getElementById("root")
);
