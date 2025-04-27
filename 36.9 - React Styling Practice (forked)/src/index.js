//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

var timelyMessage = "Good Morning!";
const currentTime = new Date().getHours();
if (currentTime >= 0 && currentTime <= 11) {
  timelyMessage = "Good Morning";
} else if (currentTime >= 12 && currentTime <= 16) {
  timelyMessage = "Good Afternoon!";
} else {
  timelyMessage = "Good Evening!";
}

ReactDOM.render(
  <div>
    <h1 className="heading">{timelyMessage}</h1>
  </div>,
  document.getElementById("root")
);

