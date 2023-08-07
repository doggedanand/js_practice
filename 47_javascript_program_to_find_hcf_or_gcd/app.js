// Define a function to find the Highest Common Factor (HCF) of two numbers
function findHCF(a, b) {
    let hcf;

    // Loop through the numbers from 1 up to the smaller of the two numbers
    for (var i = 0; i <= a && i <= b; i++) {
        // Check if both numbers are divisible by the current value of 'i'
        if (a % i == 0 && b % i == 0) {
            hcf = i; // Update HCF if both numbers are divisible by 'i'
        }
    }

    return hcf; // Return the calculated HCF
}

// Define two numbers
var num1 = 10;
var num2 = 20;

// Calculate the HCF of the two numbers using the findHCF function
var result = findHCF(num1, num2);

// Output the HCF to the console
console.log(result);
