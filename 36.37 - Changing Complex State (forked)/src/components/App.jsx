import React, { useState } from "react";

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  function handleChange(event) {
    setFname(event.target.value);
  }

  function handleChangeTwo(event) {
    setLname(event.target.value);
  }

  return (
    <div className="container">
      <h1>
        Hello {fname} {lname}
      </h1>
      <form>
        <input onChange={handleChange} name="fName" placeholder="First Name" />
        <input
          onChange={handleChangeTwo}
          name="lName"
          placeholder="Last Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;