var game = ["snake", "gun", "water"]

var playerPointOne = 0;
var playerPointTwo = 0;



// console.log(getRandomNumber1);
// console.log(getRandomNumber2);

for (var index = 0; index < 10; index++) {
    // let player1 = getRandomNumber1;
    // let player2 = getRandomNumber2;





    // will generate the random number between 0 t0 2 every time number will diffrent
    let getRandomNumber1 = Math.floor(Math.random() * 3);
    let getRandomNumber2 = Math.floor(Math.random() * 3);



    let Player1result = game[getRandomNumber1];
    console.log(Player1result)
    let Player2result = game[getRandomNumber2];
    console.log(Player2result)






    if (Player1result == Player2result) {
        console.log("Match Draw!");
    }
    if (Player1result == "snake" && Player2result == "gun") {

        console.log("Player 2 Win!");
        playerPointTwo = playerPointTwo + 1;
    } else if (Player1result == "snake" && Player2result == "water") {
        console.log("Player 1 Win!");
        playerPointOne = playerPointOne + 1;
    }
    else if (Player1result == "gun" && Player2result == "snake") {
        console.log("  Player 1 Win!!");
        playerPointOne = playerPointOne + 1;
    } else if (Player1result == "gun" && Player2result == "water") {
        console.log(" Player 2 Win!");
        playerPointTwo = playerPointTwo + 1;
    } else if (Player1result == "water" && Player2result == "gun") {
        console.log(" Player 1 Win!");
        playerPointOne = playerPointOne + 1;
    } else if (Player1result == "water" && Player2result == "snake") {
        console.log(" Player 2 Win!");
        playerPointTwo = playerPointTwo + 1;
    }



}

if (playerPointOne > playerPointTwo) {
    console.log("player one is Winner with " + (playerPointOne - playerPointTwo) + " " + "Score");
    document.write("<h1>player one is Winner with " + (playerPointOne - playerPointTwo) + " " + "Score </h1>");
} else if (playerPointOne < playerPointTwo) {
    console.log("player two is Winner with " + (playerPointTwo - playerPointOne) + " " + "Score");
    document.write("<h1>player two is Winner with " + (playerPointTwo - playerPointOne) + " " + "Score </h1>");
} else {
    console.log("<h1>Match Draw</h1>");
    document.write("<h1>Match Draw</h1>");
}


// console.log("player one score is " + " " + playerPointOne);
// console.log("player two score is " + " " + playerPointTwo);

