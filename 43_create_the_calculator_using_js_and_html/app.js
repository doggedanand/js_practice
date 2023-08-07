// Declare a variable to store the operator name
var operaterName;

// Function to append a number to the display
function number(val) {
  var result = document.getElementById('display');
  var x = result.value += val;
}

// Function to handle input of mathematical symbols
function symbol(selectedOperater) {
  var result = document.getElementById('display');
  let resultData = checkAvailableOperater(result.value);

  // Check if result is available and selected operator is not already included
  if (result && result.value && !result.value.includes(selectedOperater) && !resultData) {
    result.value += selectedOperater;
  }

  // Store the selected operator name
  operaterName = selectedOperater;
}

// Function to clear the display
function remove() {
  var result = document.getElementById('display');
  result.value = '';
}

// Function to check for the presence of an operator in a given string
function checkAvailableOperater(result) {
  let operators = ['+', '-', '*', '/'];
  let resultResponse = false;

  for (let i = 1; i < result.length; i++) {
    if (operators.includes(result[i])) {
      resultResponse = true;
    }
  }
  return resultResponse;
}

// Function to perform the calculation based on the selected operator
function calculate() {
  let result = document.getElementById("display").value;
  let operators = ['+', '-', '*', '/'];
  let operatorIndex = -1;

  // Find the index of the first operator in the result string
  for (let i = 1; i < result.length; i++) {
    var x = operators.includes(result[i]);
    if (operators.includes(result[i])) {
      operatorIndex = i;
      break;
    }
  }

  // If an operator is found, perform the calculation
  if (operatorIndex !== -1) {
    let num1 = Number(result.slice(0, operatorIndex));
    let num2 = Number(result.slice(operatorIndex + 1));
    let operator = result[operatorIndex];
    let calculatedResult;

    // Perform the calculation based on the operator
    switch (operator) {
      case '+':
        calculatedResult = num1 + num2;
        break;
      case '-':
        calculatedResult = num1 - num2;
        break;
      case '*':
        calculatedResult = num1 * num2;
        break;
      case '/':
        calculatedResult = num1 / num2;
        break;
    }

    // Display the calculated result
    document.getElementById("display").value = calculatedResult;
  }
}
