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

//The Love Calculator
var person1 = prompt("Write your first name:");
var person2 = prompt("Write your crush's first name:");
var fakePercentage = Math.random();
fakePercentage = fakePercentage * 100;
fakePercentage = Math.floor(fakePercentage) + 1;
alert(person1 + "'s love compatibility with " + person2 + " is: " + fakePercentage + "%.");

//CONTROL FLOW
//The Love Calculator (with specific messages for specific percantages; C)
var person1 = prompt("Write your first name:");
var person2 = prompt("Write your crush's first name:");
var fakePercentage = Math.random();
fakePercentage = fakePercentage * 100;
fakePercentage = Math.floor(fakePercentage) + 1;
if (fakePercentage > 70){
    alert(person1 + "'s love compatibility with " + person2 + " is: " + fakePercentage + "%. You love each other like Kanye Loves Kanye");
} else {
    alert(person1 + "'s love compatibility with " + person2 + " is: " + fakePercentage + "%.");
}

//COMPARATORS AND EQUALITY
//The Love Calculator (with added message types based on score ranges)
var person1 = prompt("Write your first name:");
var person2 = prompt("Write your crush's first name:");
var fakePercentage = Math.random();
fakePercentage = fakePercentage * 100;
fakePercentage = Math.floor(fakePercentage) + 1;
if (fakePercentage > 70){
    alert(person1 + "'s love compatibility with " + person2 + " is: " + fakePercentage + "%. You love each other like Kanye Loves Kanye");
} 
if (fakePercentage > 30 && fakePercentage <= 70) {
    alert(person1 + "'s love compatibility with " + person2 + " is: " + fakePercentage + "%.");
}
if (fakePercentage <= 30) {
    alert(person1 + "'s love compatibility with " + person2 + " is: " + fakePercentage + "%. You go together like oil & water");
}

//Leap Year determination
function isItALeapYear(year){
    if(year % 4 === 0){
        if(year % 100 !== 0){
            return "Yes, " + year + " is a leap year.";
        } else{
            if(year % 400 ===0){
                return "Yes, " + year + " is a leap year.";
            } else{
                return "No, " + year + " is not a leap year.";
            }
        }
    }else{
        return "No, " + year + " is not a leap year.";
    }
}

while(true){
    var inputYear = prompt("Enter your year");
    alert(isItALeapYear(inputYear));
}

//Collections and Javascript Arrays

var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
var checkInName = prompt("Could we have your name?");

if(guestList.includes(checkInName)){
    alert("Hello, " + checkInName + "! Welcome to the party :)");
}else{
    alert("Unfortunately, your name isn't on the guest list. Maybe next time.");
}

/*FizzBuzz Challenge (for the iteration to work,
run the "fizzBuzz" function in the Chrome 
console rather that as code in the "sources" file)*/
var items = [];
var item = 0;

function fizzBuzz(){
    item = item + 1;
    items.push(item);
    console.log(items);
}

var items = [];
var item = 0;

function fizzBuzz(){
    item = item + 1;
    if (item % 3 === 0 && item % 5 !== 0){
        items.push("Fizz");
    } else if (item % 3 !== 0 && item % 5 === 0){
        items.push("Buzz");
    } else if (item % 3 === 0 && item % 5 === 0){
        items.push("FizzBuzz");
    } else{
        items.push(item);
    }
    console.log(items);
}

fizzBuzz();