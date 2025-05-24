import React from "react";
import Login from "./Login";

var isLoggedIn = false;

function App() {
  return (
    <div className="container">{
      isLoggedIn === true ? <h1>Hello</h1> :
      <form className="form">
        <Login buttonName="Login" />
      </form>
    }</div>
  );
}

export default App;
