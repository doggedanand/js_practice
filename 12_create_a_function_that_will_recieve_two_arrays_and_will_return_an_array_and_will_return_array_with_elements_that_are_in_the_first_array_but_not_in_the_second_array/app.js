// function created
function arraysSorting() {
    // array created
    let array1 = [1, 2, 5, 20, 40, 45, 100, 101];
    // have selected an td using id and changed the innerHTML
    document.getElementById('td1').innerHTML += array1;;

    // array created
    let array2 = [-10, 5, -5, 2, 4, 5, 6, 8, 12, 101];

    // have selected an td using id and changed the innerHTML
    document.getElementById('td2').innerHTML += array2;

    // and empty array variable created
    let result = [];

    // loop will run till array1 lenght
    for (var i = 0; i < array1.length; i++) {

        // have taken boolean variable
        var isAvailable = false;

        // loop will run till array2 lenght
        for (var j = 0; j < array2.length; j++) {

            // will check value value first and second array must be same
            if (array1[i] === array2[j]) {
                // have done boolean variable true and loop break
                isAvailable = true;
                break;
            }
        }
        // if isAvailabe would be true then below condition will execute
        if (!isAvailable) {
            // have created shorted variable and that variable stored array index value
            var shorted = array1[i]
            
            // in result variable shorted value would be push
            result.push(shorted);
            // have created tr variable and changed the table innerHTML
            let tr = `<tr>
            <td>`+ i + `</td>`
                + `<td>` + array1[i] + `</td>`
                + `<td>` + array2[i] + `</td>`
                + `<td>` + shorted + `</td></tr>`
            document.getElementById('tbl1').innerHTML += tr;
        }



    }
    // have selected td using id and changed the innerHTML
    document.getElementById('td3').innerHTML += result;
    // will show the result in console
    console.log('result is ' + result);
}

arraysSorting();

