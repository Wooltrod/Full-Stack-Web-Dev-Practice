import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [color, setColor] = useState("white");

  function handleClick() {
    setHeadingText("Submitted");
  }

  function handleMouseOver() {
    setColor("black");
  }

  function handleMouseOut() {
    setColor("");
  }

  var buttonColor = {
    backgroundColor: color,
  };

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOut={handleMouseOut}
        onMouseOver={handleMouseOver}
        style={buttonColor}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;