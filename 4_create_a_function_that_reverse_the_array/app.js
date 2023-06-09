// will see how can reverse the array using a function




// array created
let array = [11, 21, 33, 5, 36, 255, 14, 75, 222];
// empty array variable created
let reverse = []

// loop will run till array length
for (var index = array.length; index >= 0; index--) {
    // array index will store in reverse varialbe but index would be form reverse
    reverse.push(array[index])
}

// will print reverse array in console
console.log(reverse);

