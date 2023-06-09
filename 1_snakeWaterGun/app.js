var game = ["Snake", "Gun", "Water"]

var playerPointOne = 0;
var playerPointTwo = 0;



 

for (var index = 1; index < 11; index++) {
  


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




 

}

 