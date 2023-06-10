// will see how can calculate the sum of numbers with in an array 




// array created
let array = [1, 2, 3, 4, 45, 5, 6, 7, 8, 9, 10];

// variable sum created
let sum = 0;

// loop will execute till array length
for (var index = 0; index < array.length; index++) {
    // array index number will add in sum variable
    sum += array[index];
// will print every time added number
    console.log(sum);
}

// show array of sum
document.write(`<h1>total sum is   ${sum}</h1>`);