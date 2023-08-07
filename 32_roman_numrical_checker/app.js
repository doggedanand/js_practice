// This function converts Roman numerals to decimal numbers and vice versa.

function romanNumercalChecker(input) {

    // Check if the input is a string (Roman numeral)
    if (typeof input === 'string') {

        // Define Roman numeral values
        const romanValues = {
            I: 1,   // I represents 1
            V: 5,   // V represents 5
            X: 10,  // X represents 10
            L: 50,  // L represents 50
            C: 100, // C represents 100
            D: 500, // D represents 500
            M: 1000 // M represents 1000
        }

        // Initialize variables to track conversion
        let convertedRoman = 0;   // Decimal value of the Roman numeral
        let previousValue = 0;    // Previous Roman numeral value

        // Loop through the input Roman numeral from right to left
        for (var i = input.length - 1; i >= 0; i--) {
            const currentRoman = input[i];      // Get the current Roman numeral
            const currentValue = romanValues[currentRoman];  // Get its corresponding value

            // Compare with the previous value to determine subtraction or addition
            if (currentValue < previousValue) {
                convertedRoman -= currentValue;  // Subtract the current value if smaller
            } else {
                convertedRoman += currentValue;  // Add the current value if larger or equal
                previousValue = currentValue;    // Update the previous value
            }
        }

        return convertedRoman;   // Return the decimal value
    }
    // Check if the input is a number (decimal value)
    else if (typeof input === 'number') {

        // Define Roman numeral values with their corresponding decimals
        const romanNumerals = [
            { value: 1000, numeral: 'M' },
            { value: 900, numeral: 'CM' },
            { value: 500, numeral: 'D' },
            { value: 400, numeral: 'CD' },
            { value: 100, numeral: 'C' },
            { value: 90, numeral: 'XC' },
            { value: 50, numeral: 'L' },
            { value: 40, numeral: 'XL' },
            { value: 10, numeral: 'X' },
            { value: 9, numeral: 'IX' },
            { value: 5, numeral: 'V' },
            { value: 4, numeral: 'IV' },
            { value: 1, numeral: 'I' }
        ]

        // Initialize result to store the Roman numeral
        let result = '';

        let remainingValue = input;   // Store the remaining value for conversion

        // Loop through the Roman numeral values
        for (const { value, numeral } of romanNumerals) {

            // Continue adding the Roman numeral while the remaining value is greater or equal
            while (remainingValue >= value) {
                result += numeral;            // Add the Roman numeral
                remainingValue -= value;      // Subtract the corresponding decimal value
            }

        }

        return result;   // Return the Roman numeral representation
    }
}

const result1 = romanNumercalChecker("X");   // Convert the number 10 to Roman numeral
const result2 = romanNumercalChecker(10);   // Convert the number 10 to Roman numeral

console.log(result1); // Output: X   // Display the converted Roman numeral
console.log(result2); // Output: X   // Display the converted Roman numeral
