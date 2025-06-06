import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.onInput} type="text" value={props.inputValue} />
      <button onClick={props.onPressed}>
        <span>Add</span>
      </button>
    </div>
  );
}

/*--Angela's Solution--*/

import React, { useState } from "react";

function InputArea() {
  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button onClick={addItem}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
