var game = ["Snake", "Gun", "Water"]

var playerPointOne = 0;
var playerPointTwo = 0;



// console.log(getRandomNumber1);
// console.log(getRandomNumber2);

for (var index = 1; index < 11; index++) {
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

        let tr = `<tr>
                    <td>`+ index + `</td>`
            + `<td>` + Player1result + `</td>`
            + `<td>` + Player2result + `</td>`
            + `<td> Draw</td></tr>`;

        document.getElementsByTagName('tbody')[0].innerHTML += tr;
    }
    if (Player1result == "Snake" && Player2result == "Gun") {

        console.log("Player 2 Win!");
        playerPointTwo = playerPointTwo + 1;

        let tr = `<tr>
        <td>`+ index + `</td>`
            + `<td>` + Player1result + `</td>`
            + `<td>` + Player2result + `</td>`
            + `<td> Player 2 Win!</td></tr>`
        document.getElementsByTagName('tbody')[0].innerHTML = document.getElementsByTagName('tbody')[0].innerHTML + tr;

    } else if (Player1result == "Snake" && Player2result == "Water") {
        console.log("Player 1 Win!");
        playerPointOne = playerPointOne + 1;

        let tr = `<tr>
        <td>`+ index + `</td>`
            + `<td>` + Player1result + `</td>`
            + `<td>` + Player2result + `</td>`
            + `<td>Player 1 Win!</td></tr>`

        document.getElementsByTagName('tbody')[0].innerHTML = document.getElementsByTagName('tbody')[0].innerHTML + tr;
    }
    else if (Player1result == "Gun" && Player2result == "Snake") {
        console.log("  Player 1 Win!!");
        playerPointOne = playerPointOne + 1;

        let tr = `<tr>
        <td>`+ index + `</td>`
            + `<td>` + Player1result + `</td>`
            + `<td>` + Player2result + `</td>`
            + `<td> Player 1 Win! </td> </tr>`
        document.getElementsByTagName('tbody')[0].innerHTML = document.getElementsByTagName('tbody')[0].innerHTML + tr;
    } else if (Player1result == "Gun" && Player2result == "Water") {
        console.log(" Player 2 Win!");
        playerPointTwo = playerPointTwo + 1;

        let tr = `<tr>
        <td>`+ index + `</td>`
            + `<td>` + Player1result + `</td>`
            + `<td>` + Player2result + `</td>`
            + `<td> Player 2 Win! </td></tr>`
        document.getElementsByTagName('tbody')[0].innerHTML = document.getElementsByTagName('tbody')[0].innerHTML + tr;

    } else if (Player1result == "Water" && Player2result == "Gun") {
        console.log(" Player 1 Win!");
        playerPointOne = playerPointOne + 1;

        let tr = `<tr>
        <td>`+ index + `</td>`
            + `<td>` + Player1result + `</td>`
            + `<td>` + Player2result + `</td>`
            + `<td> Player 1 Win! </td></tr>`
        document.getElementsByTagName('tbody')[0].innerHTML = document.getElementsByTagName('tbody')[0].innerHTML + tr;
    } else if (Player1result == "Water" && Player2result == "Snake") {
        console.log(" Player 2 Win!");
        playerPointTwo = playerPointTwo + 1;

        let tr=`<tr>
        <td>`+index+`</td>`
        +`<td>`+Player1result+`</td>`
        +`<td>`+Player2result+`</td>`
        +`<td> Player 2 Win! </td> </tr>`
        document.getElementsByTagName('tbody')[0].innerHTML= document.getElementsByTagName('tbody')[0].innerHTML+tr;
    }

    let tr1 = Player1result;
    let tr2 = Player2result;
    // document.write(`Player one get ${tr}`)
    // document.write("</br>")


    var player1 = document.getElementById("playerOne")
    //player1.append(tr1);
    document.write("<br>");






    var player2 = document.getElementById("playerTwo");
    // player2.append(tr2);

    //    var table= document.getElementById("PlayerOne"); 

}


// // for print result 10 times
// for(let index=0; index<10; index++){


//     let tr1 =   Player1result ;
//     let tr2 =   Player2result ;
//     // document.write(`Player one get ${tr}`)
//     // document.write("</br>")


//     var player1 = document.getElementById("playerOne")
//     player1.append(tr1);
//     document.write("<br>");



//     var player2=document.getElementById("playerTwo");
//     player2.append(tr2);

//     //    var table= document.getElementById("PlayerOne"); 

// }











if (playerPointOne > playerPointTwo) {
    console.log("player one is Winner with " + (playerPointOne - playerPointTwo) + " " + "Score");
    document.write("<h1>player one is Winner with " + (playerPointOne - playerPointTwo) + " " + "Score </h1>");
} else if (playerPointOne < playerPointTwo) {
    console.log("player two is Winner with " + (playerPointTwo - playerPointOne) + " " + "Score");
    document.write("<h1>player two is Winner with " + (playerPointTwo - playerPointOne) + " " + "Score </h1>");
} else {
    console.log("Match Draw");
    document.write("<h1>Match Draw</h1>");
}


// console.log("player one score is " + " " + playerPointOne);
// console.log("player two score is " + " " + playerPointTwo);

