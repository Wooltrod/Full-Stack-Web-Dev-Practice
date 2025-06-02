import React, { useState } from "react";

/*part 1: Rendering h1 dynamically based on input (onChange) event*/
function App() {
  const [name, setName] = useState("");

  function handleChange(event) {
    const name = event.target.value;
    setName(name);
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
    const name = event.target.value;
    setName(name);
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

/*part 2(improved): Update h1 based on input ONLY after hitting submit button*/

function App() {
  const [name, setName] = useState("");
  const [isClicked, setClicked] = useState(false);

  function handleChange(event) {
    const value = event.target.value;
    setName(value);
    if (value.trim() === "") {
      setClicked(false);
    }
  }

  function handleClick() {
    if (name.trim() !== "") {
      setClicked(true);
    }
  }

  return (
    <div className="container">
      <h1>{isClicked ? `Hello ${name}` : "Hello"}</h1>
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

/*part 3: if using our input and button within a form HTML element, 
configure it to prevent page reloading on clicking the submit button */

function App() {
  const [name, setName] = useState("");
  const [isClicked, setClicked] = useState(false);

  function handleChange(event) {
    const value = event.target.value;
    setName(value);
    if (value.trim() === "") {
      setClicked(false);
    }
  }

  function handleClick(event) {
    if (name.trim() !== "") {
      setClicked(true);
      event.preventDefault();
    }
  }

  return (
    <div className="container">
      <form onSubmit={handleClick}>
        <h1>{isClicked ? `Hello ${name}` : "Hello"}</h1>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
