function checkDivisibilityWithTwoNumber(num1, num2, num3) {
    // Check if num1 is divisible by num2 using the modulo operator (%)
    if (num1 % num2 == 0) {
        // Check if num1 is also divisible by num3 using the modulo operator (%)
        if (num1 % num3 == 0) {
            // If both conditions are true, return true
            return true;
        }
    }
    // If any of the conditions is false, return false
    return false;
}

const n = 6;

const x = 2;

const y = 3;

const result = checkDivisibilityWithTwoNumber(n, x, y);

console.log(result);