// Define a function to find the Greatest Common Divisor (GCD) of two numbers
function findGDC(a, b) {
    let gdc;
    for (var i = 0; i < a && i < b; i++) {
        if (a % i == 0 && b % i == 0) {
            gdc = i; // Update GCD if both numbers are divisible by i
        }
    }

    return gdc; // Return the calculated GCD
}

// Define a function to find the Least Common Multiple (LCM) of two numbers
function findLCM(a, b) {
    var gdc = findGDC(a, b); // Calculate GCD using the findGDC function
    return (a * b) / gdc; // Calculate and return LCM using the formula
}

// Define two numbers
var num1 = 336;
var num2 = 360;

// Calculate the LCM and GCD of the two numbers
var result = findLCM(num1, num2);
var gdc = findGDC(num1, num2);

// Output the LCM of the numbers to the console
console.log(`LCM of ${num1} and ${num2} is:`, result);
