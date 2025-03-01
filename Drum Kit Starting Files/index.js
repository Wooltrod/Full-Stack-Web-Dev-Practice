function handleClick(){
    alert("I got clicked!");
}

for(var i = 0; i < document.querySelectorAll(".drum").length ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

//Higher order functions
function multiply(num1, num2){return num1 * num2;}
function divide(num1, num2){return num1 / num2;}
function subtract(num1, num2){return num1 - num2;}
function add(num1, num2){return num1 + num2;}

function calculator(num1, num2, operator){
    return operator(num1, num2);
}