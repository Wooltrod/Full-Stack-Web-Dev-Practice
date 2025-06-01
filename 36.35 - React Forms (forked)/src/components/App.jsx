import React, { useState } from "react";

/*part 1: Rendering h1 dynamically based on input (onChange) event*/
function App() {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
      />
      <button>Submit</button>
    </div>
  );
}

/*part 2: Update h1 based on input ONLY after hitting submit button*/

function App() {
  const [name, setName] = useState("");
  const [isClicked, setClicked] = useState(false);

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick() {
    setClicked(true);
  }

  return (
    <div className="container">
      {isClicked ? <h1>Hello {name}</h1> : <h1>Hello</h1>}
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}


export default App;
