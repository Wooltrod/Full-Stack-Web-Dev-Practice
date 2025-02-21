/*pseudo random number generator 
for simulating a die roll*/
//"randomly" creates a random 16-place decimal between 0 - 0.9999999999999999
var decimal = Math.random();
//we multiply by '6' to fit the figure within the parameters of the die (6 outcomes)
var realNumber = decimal * 6;
//we take the floor of the above value to obtain a clean integer
var dieInteger = Math.floor(realNumber) + 1; 
console.log(dieInteger);

//Angela's version of the code above
var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1;
console.log(n);