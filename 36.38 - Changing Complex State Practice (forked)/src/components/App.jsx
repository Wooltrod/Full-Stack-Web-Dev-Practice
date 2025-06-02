import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleInputs(event) {
    const inputValue = event.target.value;
    const inputName = event.target.name;

    setContact((prevStateValue) => {
      if (inputName === "fName") {
        return {
          fName: inputValue,
          lName: prevStateValue.lName,
          email: prevStateValue.email,
        };
      } else if (inputName === "lName") {
        return {
          fName: prevStateValue.fName,
          lName: inputValue,
          email: prevStateValue.email,
        };
      } else if (inputName === "email") {
        return {
          fName: prevStateValue.fName,
          lName: prevStateValue.lName,
          email: inputValue,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleInputs}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={handleInputs}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={handleInputs}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
