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

//string slicing
var givenName = "Angela";
givenName.slice(0,1); //output is "A"
givenName.slice(0,2); //output is "An"
givenName.slice(0,3); //output is "Ang"
givenName.slice(0,4); //output is "Ange"
givenName.slice(0,5); //output is "Angel"
givenName.slice(0,6); //output is "Angela"
givenName.slice(1,6); //output is "ngela"
givenName.slice(2,6); //output is "gela"
givenName.slice(3,6); //output is "ela"
givenName.slice(4,6); //output is "la"
givenName.slice(5,6); //output is "a"

//string slicing [twitter implementation]
var input = prompt("write in your text");
var tweet = input.slice(0,139); //this is wrong, should be (0, 140)
alert("Your tweet is: " + tweet + ". " + (input.length - tweet.length) + " characters were removed from your tweet.");

//instructors solution code
var tweet2 = prompt("Compose your tweet: ");
var tweetUnder140 = tweet2.slice(0, 140);
alert(tweetUnder140);

//instructor's solution code, condensed into a single line
alert(prompt("Compose your tweet: ").slice(0, 140));

//string conversion to uppercase
var myName = "Angela";
myName = myName.toUpperCase();
console.log(myName);

