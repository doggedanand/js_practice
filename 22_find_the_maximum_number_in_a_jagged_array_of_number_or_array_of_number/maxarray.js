// an jagged array created
let ar = [1, 2, [15, [23], [5, 12]], [100]];
// a findMaxNumber function created with one parameter
function findMaxNumber(arr) {
  let max = Number.NEGATIVE_INFINITY; // Initialize max as the smallest possible value
 // iterate the value 
  for (let el of arr) {
    if (Array.isArray(el)) {
      el = findMaxNumber(el); // Recursively search for the maximum number in nested arrays
    }

    if (el > max) {
      max = el; // Update max if a larger number is found
    }
  }
// return the max value in 
  return max;
}

console.log(findMaxNumber(ar)); // Output: 100
