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
        <input 
          onChange={handleChange} 
          name="fName" 
          placeholder="First Name" 
          value={fname}
        />
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

/*Add useState/Stateful implementation that parses both fname and lname 
into a single object, and requires only one event listener function.*/

function App() {
  // const [fname, setFname] = useState("");
  // const [lname, setLname] = useState("");
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
  });

  // function handleChange(event) {
  //   setFname(event.target.value);
  // }

  // function handleChangeTwo(event) {
  //   setLname(event.target.value);
  // }

  function handleChange(event) {
    // const newValue = event.target.value;
    // const inputName = event.target.name;
    const { value, name } = event.target;

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fname: value,
          lname: prevValue.lname,
        };
      } else if (name === "lName") {
        return {
          fname: prevValue.fname,
          lname: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fname} {fullName.lname}
      </h1>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={fullName.fname}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={fullName.lname}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App; 