import React, { useState } from "react";

function App() {
  var [time, setTime] = useState(new Date().toLocaleTimeString());

  function showTime() {
    setTime((time = new Date().toLocaleTimeString()));
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={showTime}>Get Time</button>
    </div>
  );
}

export default App;