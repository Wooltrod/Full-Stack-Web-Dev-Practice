import React from "react";

var isLoggedIn = false;

const currentTime = new Date().getHours();

function App() {
  return (
    <div className="container">{

        currentTime > 12 ? <h1>Why are you still working?</h1> : null
 

    }</div>
  );
}

export default App;