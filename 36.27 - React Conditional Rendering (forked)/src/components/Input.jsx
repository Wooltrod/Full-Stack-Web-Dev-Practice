import React from "react";

function Input(props) {
  return (
    <div>
      <input type={props.boxOneType} placeholder={props.boxOnePlaceholder} />
      <input type={props.boxTwoType} placeholder={props.boxTwoPlaceholder} />
    </div>
  );
}

export default Input;
