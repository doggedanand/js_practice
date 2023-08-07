// This function checks if a given year is a leap year
function isLeapYear(year) {
    // Check if the year is divisible by 4
    if (year % 4 === 0) {
        // Check if the year is not divisible by 100 or is divisible by 400
        if (year % 100 !== 0 || (year % 100 === 0 && year % 400 === 0)) {
            return true;  // It's a leap year
        }
    }
    return false;  // It's not a leap year
}

const year = 2200;  // The year to be checked

// Check if the given year is a leap year and display the result
if (isLeapYear(year)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}
