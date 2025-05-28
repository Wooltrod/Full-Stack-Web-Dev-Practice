import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0); //arrray destructuring, because use state returns and saves an arrey to const

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
