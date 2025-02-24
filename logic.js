var dice1 = Math.random();
dice1 = Math.floor((dice1 * 6)+1);

var dice2 = Math.random();
dice2 = Math.floor((dice2 * 6)+1);

if(dice2 > dice1) {
    document.querySelector("html body div h1").innerHTML = "<img class='left' src='./images/red-flag.png' /> Player 2 Won <img src='./images/red-flag.png' />";
    document.querySelector("html body div h1 img.left").classList.add("invisible");
}

if(dice2 < dice1) {
    document.querySelector("html body div h1").innerHTML = "<img src='./images/red-flag.png' /> Player 1 Won <img class='right' src='./images/red-flag.png' />";
    document.querySelector("html body div h1 img.right").classList.add("invisible");
}

if(dice1 == dice2) {
    document.querySelector("html body div h1").textContent = "Draw!";
}

if(dice1 == 1) {
    document.querySelector("html body div div .img1").setAttribute("src", "./images/dice1.png");
} else if(dice1 == 2) {
    document.querySelector("html body div div .img1").setAttribute("src", "./images/dice2.png");
} else if(dice1 == 3) {
    document.querySelector("html body div div .img1").setAttribute("src", "./images/dice3.png");
} else if(dice1 == 4) {
    document.querySelector("html body div div .img1").setAttribute("src", "./images/dice4.png");
} else if(dice1 == 5) {
    document.querySelector("html body div div .img1").setAttribute("src", "./images/dice5.png");
} else if(dice1 == 6) {
    document.querySelector("html body div div .img1").setAttribute("src", "./images/dice6.png");
}

if(dice2 == 1) {
    document.querySelector("html body div div .img2").setAttribute("src", "./images/dice1.png");
} else if(dice2 == 2) {
    document.querySelector("html body div div .img2").setAttribute("src", "./images/dice2.png");
} else if(dice2 == 3) {
    document.querySelector("html body div div .img2").setAttribute("src", "./images/dice3.png");
} else if(dice2 == 4) {
    document.querySelector("html body div div .img2").setAttribute("src", "./images/dice4.png");
} else if(dice2 == 5) {
    document.querySelector("html body div div .img2").setAttribute("src", "./images/dice5.png");
} else if(dice2 == 6) {
    document.querySelector("html body div div .img2").setAttribute("src", "./images/dice6.png");
}

function refreshPage() {
    location.reload();
}