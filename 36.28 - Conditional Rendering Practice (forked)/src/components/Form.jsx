import React from "react";
import { userIsRegistered } from "./App";

function Form() {
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

/*Angela's Solution (without using the imported userIsRegistered variable)*/
function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {props.isRegistered ? (
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
