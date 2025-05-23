import React from "react";
import Input from "./Input";

function Login(props) {
  return (
    <form className="form">
      <Input
        boxOneType="text"
        boxTwoType="password"
        boxOnePlaceholder="Username"
        boxTwoPlaceholder="Password"
      />
      <button type="submit">{props.buttonName}</button>
    </form>
  );
}

export default Login;
