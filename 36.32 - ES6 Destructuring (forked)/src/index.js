import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";
import animals from "./data";

const [cat, dog] = animals;

/*destructuring object
const {name, sound} = cat;*/

//destructuring object with alternative names for the fields
const {name: catName, sound: catSound} = cat;

//Syntax for assigning placeholder values for our destructured fields
const {name = "Fluffy", sound = "Purr"} = cat;

// CHALLENGE: uncomment the code below and see the car stats rendered

// ReactDOM.render(
//   <table>
//     <tr>
//       <th>Brand</th>
//       <th>Top Speed</th>
//     </tr>
//     <tr>
//       <td>{tesla.model}</td>
//       <td>{teslaTopSpeed}</td>
//       <td>{teslaTopColour}</td>
//     </tr>
//     <tr>
//       <td>{honda.model}</td>
//       <td>{hondaTopSpeed}</td>
//       <td>{hondaTopColour}</td>
//     </tr>
//   </table>,
//   document.getElementById("root")
// );
