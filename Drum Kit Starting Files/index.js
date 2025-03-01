function handleClick(){
    alert("I got clicked!");
}

function play(){
    var audio = new Audio("./sounds/tom-1.mp3");
    audio.play();
}

for(var i = 0; i < document.querySelectorAll(".drum").length ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", play);
}

//alternative implementation:
for(var i = 0; i < document.querySelectorAll(".drum").length ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var audio = new Audio("./sounds/tom-1.mp3");
        audio.play();
    });
}

//Higher order functions
function multiply(num1, num2){return num1 * num2;}
function divide(num1, num2){return num1 / num2;}
function subtract(num1, num2){return num1 - num2;}
function add(num1, num2){return num1 + num2;}

function calculator(num1, num2, operator){
    return operator(num1, num2);
}

//applying DOM to change the text color of pressed buttons
// for(var i = 0; i < document.querySelectorAll(".drum").length ; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click", function (){
//         this.classList.add("clicked");
//     });
// }

//alternative solution
for(var i = 0; i < document.querySelectorAll(".drum").length ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        this.style.color = "white";
    });
}