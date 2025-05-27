import React from "react";
import Form from "./Form";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      <Form />
    </div>
  );
}

/*Angela's Solution (without exporing the userIsRegistered variable)*/
function App() {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered}/>
    </div>
  );
}


export default App;
export { userIsRegistered };
