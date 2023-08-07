// This function calculates the number of days since birth based on age.

function calculateDaysSinceBirth(age) {
  // Get the current date
  var currentDate = new Date();

  // Calculate the birth date by subtracting age from the current year
  var birthDate = new Date(currentDate.getFullYear() - age, currentDate.getMonth(), currentDate.getDate());

  // Get the birth year from the birth date
  var birthYear = birthDate.getFullYear();
  console.log('birth Date is :', birthYear)

  // Initialize the variable to count birth days
  let birthDays = 0;

  // Get the current year
  var currentYear = new Date().getFullYear();
  console.log('current year :', currentYear)

  // Loop through years from birth year to one year before current year
  for (var i = birthYear; i < currentYear; i++) {

    // Check if the year is a leap year
    if (isLeapYear(i) == true) {
      birthDays += 366;  // Add 366 days for leap year
    } else {
      birthDays += 365;  // Add 365 days for non-leap year
    }
  }

  return birthDays;  // Return the total birth days
}

// Input age
var age = 4;

// Calculate the number of days since birth
var daysSinceBirth = calculateDaysSinceBirth(age);

console.log("Days Since Birth:", daysSinceBirth);  // Display the result

// This function checks if a given year is a leap year
function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 !== 0 || (year % 100 === 0 && year % 400 === 0)) {
      return true;  // It's a leap year
    }
  }
  return false;  // It's not a leap year
}
