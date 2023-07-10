function factorialize(num) {
    // Initialize the factorial variable to 1
    let factorial = 1;

    // Calculate the factorial of the given number
    for (let i = 2; i <= num; i++) {
        factorial *= i;
    }

    // Return the calculated factorial
    return factorial;
}

// Call the factorialize function with num=3
const result = factorialize(3);

// Print the result
console.log(result);
