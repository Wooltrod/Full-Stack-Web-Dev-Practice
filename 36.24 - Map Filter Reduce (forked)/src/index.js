var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
function double(x){
    return x * 2;
}

const newNumbers =  numbers.map(double);

const newNumbers2 = numbers.map(function (x) {
    return x * 2;
});

//Filter - Create a new array by keeping the items that return true.
const newNumbers3 = numbers.filter(function (num) {
    return num > 10;
});

//Reduce - Accumulate a value by doing something to each item in an array.
const newNumbers4 = numbers.reduce(function (accumulator, currentNumber) {
    return accumulator + currentNumber;
});

//Find - find the first item that matches from an array.
numbers.find(function (num) {
    return num > 10;
});

//FindIndex - find the index of the first item that matches.
numbers.findIndex(function (num) {
    return num > 10;
});