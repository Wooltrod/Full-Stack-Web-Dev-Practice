import React, { useState } from "react";

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  function handleChange(event) {
    const name = event.target.value;
    setFname(name);
  }

  function handleChangeTwo(event) {
    const name2 = event.target.value;
    setLname(name2);
  }

  return (
    <div className="container">
      <h1>
        Hello {fname} {lname}
      </h1>
      <form>
        <input onChange={handleChange} name="fName" placeholder="First Name" value={fname}/>
        <input
          onChange={handleChangeTwo}
          name="lName"
          placeholder="Last Name"
          value={lname}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;