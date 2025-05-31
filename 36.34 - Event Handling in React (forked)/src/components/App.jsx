import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  //const [color, setColor] = useState("white");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleClick() {
    setHeadingText("Submitted");
  }

  function handleMouseOver() {
    //setColor("black");
    setMouseOver(true);
  }

  function handleMouseOut() {
    //setColor("");
    setMouseOver(false);
  }

  /*var buttonColor = {
    backgroundColor: color,
  };*/

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOut={handleMouseOut}
        onMouseOver={handleMouseOver}
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
