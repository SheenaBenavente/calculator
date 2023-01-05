// Read inputs from the user
const num1 = prompt("Enter a number: ");
const operator = prompt("Enter an operator (+, -, *, /): ");
const num2 = prompt("Enter another number: ");

// Convert the inputs from strings to numbers
const number1 = Number(num1);
const number2 = Number(num2);

// Define the functions for the different operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Call the appropriate function based on the operator
let result;
if (operator === '+') {
  result = add(number1, number2);
} else if (operator === '-') {
  result = subtract(number1, number2);
} else if (operator === '*') {
  result = multiply(number1, number2);
} else if (operator === '/') {
  result = divide(number1, number2);
}

// Print the result to the console
console.log(result);
