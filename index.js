
var heading = document.querySelector("h1");
var imgFirst = document.querySelector(".img1");
var imgSecond = document.querySelector(".img2");

function randomImageSelector() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
    var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6

    //changing h1 to say which one is the winner
    if(randomNumber1 === randomNumber2){
        heading.innerHTML="Draw!";
    }else if (randomNumber1 > randomNumber2){
        heading.innerHTML="🚩Player 1 Wins!";
    }else{
        heading.innerHTML="Player 2 Wins!🚩";
    }

    //for first image
    if (randomNumber1 === 1) {
        imgFirst.setAttribute("src", "images/dice1.png");
    } else if (randomNumber1 === 2) {
        imgFirst.setAttribute("src", "images/dice2.png");
    } else if (randomNumber1 === 3) {
        imgFirst.setAttribute("src", "images/dice3.png");
    } else if (randomNumber1 === 4) {
        imgFirst.setAttribute("src", "images/dice4.png");
    } else if (randomNumber1 === 5) {
        imgFirst.setAttribute("src", "images/dice5.png");
    } else {
        imgFirst.setAttribute("src", "images/dice6.png");
    }

    //for second image
    if (randomNumber2 === 1) {
        imgSecond.setAttribute("src", "images/dice1.png");
    } else if (randomNumber2 === 2) {
        imgSecond.setAttribute("src", "images/dice2.png");
    } else if (randomNumber2 === 3) {
        imgSecond.setAttribute("src", "images/dice3.png");
    } else if (randomNumber2 === 4) {
        imgSecond.setAttribute("src", "images/dice4.png");
    } else if (randomNumber2 === 5) {
        imgSecond.setAttribute("src", "images/dice5.png");
    } else {
        imgSecond.setAttribute("src", "images/dice6.png");
    }

}

randomImageSelector();

// we can also do following istead of writting all this if and else statement.
// var randomImages1 = "images/dice" + randomNumber1 + ".png";
// document.querrySelectorAll("img")[0].setAttribute("src","randomImages1");