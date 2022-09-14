
// Random number generator
var random1 = Math.floor(Math.random() * 6) + 1;
var random2 = Math.floor(Math.random() * 6) + 1;

//src string manipulator 
var imageSrc1 = "images/dice" + random1 + ".png";
var imageSrc2 = "images/dice" + random2 + ".png";

//src change string maethod
var image1 = document.getElementsByClassName("img1")[0];
image1.setAttribute("src", imageSrc1);

var image2 = document.getElementsByClassName("img2")[0];
image2.setAttribute("src", imageSrc2);

// var to get h1 for changing 
var headDisplay = document.getElementsByTagName("h1")[0];

//alert prompt after comparison.
if (random1 > random2) {
    headDisplay.innerHTML = "PLAYER 1 Winner ";
   // alert("Player 1 is the winner! Player 2 please obey 😆 Your fate has been decided");

}
else if (random1 < random2) {
    headDisplay.innerHTML = "PLAYER 2 Winner ";
    //alert("Player 2 is the winner! Player 1 please obey 😆 Your fate has been decided");

}

else {
    headDisplay.innerHTML = " DRAW ¯\\_(ツ)_/¯ ";
    //alert("oh oh please refresh again even Super computer can't settle your debate on 1st try 🖥️");
}