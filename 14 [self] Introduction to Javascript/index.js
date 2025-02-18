var a = "3";
var b = "8";

///execute a swap using only three lines of code below

var temp = a;
var a = b;
var b = temp;

console.log("a is " + a);
console.log("b is " + b);

//string lengths (twitter character counter)
var input = prompt("write in your text");
console.log("you have written " + input.length + " characters, you have " + (140 - input.length) + " characters left");