var randomNumberDieOne = (Math.floor(Math.random()*6)) + 1;

if(randomNumberDieOne === 1){
    document.querySelector(".dice > .img1").setAttribute("src", "./images/dice1.png");
}else if(randomNumberDieOne === 2){
    document.querySelector(".dice > .img1").setAttribute("src", "./images/dice2.png");
}else if(randomNumberDieOne === 3){
    document.querySelector(".dice > .img1").setAttribute("src", "./images/dice3.png");
}else if(randomNumberDieOne === 4){
    document.querySelector(".dice > .img1").setAttribute("src", "./images/dice4.png");
}else if(randomNumberDieOne === 5){
    document.querySelector(".dice > .img1").setAttribute("src", "./images/dice5.png");
}else if(randomNumberDieOne === 6){
    document.querySelector(".dice > .img1").setAttribute("src", "./images/dice6.png");
}

var randomNumberDieTwo = (Math.floor(Math.random()*6)) + 1;