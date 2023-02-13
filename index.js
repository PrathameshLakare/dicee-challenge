var imgFirst = document.querySelector(".img1");
var imgSecond = document.querySelector(".img2");

function randomImageSelector() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

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