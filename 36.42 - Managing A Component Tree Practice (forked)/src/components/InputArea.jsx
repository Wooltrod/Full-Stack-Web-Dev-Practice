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

export default InputArea;
