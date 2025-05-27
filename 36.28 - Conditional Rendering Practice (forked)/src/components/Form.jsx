import React from "react";
import { userIsRegistered } from "./App";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {userIsRegistered ? (
        <button type="submit">Login</button>
      ) : (
        <div>
          <input type="password" placeholder="Confirm Password" />
          <button type="submit">Register</button>
        </div>
      )}
    </form>
  );
}

export default Form;
