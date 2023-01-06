let operator = '';
let previousValue = '';
let currentValue = '';

document.addEventListener("DOMContentLoaded", function(){
    //Store all components on HTML in our JS
    let clear = document.querySelector("#clear");
    let decimal = document.querySelector(".decimal");
    let equal = document.querySelector(".equal");

    let operators = document.querySelectorAll(".operator");
    let numbers = document.querySelectorAll(".number");

    let previousScreen = document.querySelector(".previous");
    let currentScreen = document.querySelector(".current");

    //Grabs the numbers from the DOM when element is clicked
    numbers.forEach((number) => number.addEventListener("click", function(e){
      handleNumber(e.target.textContent)
      currentScreen.textContent = currentValue;
    }))
})

//Function limits length to 9 digits and displays current value on screen
function handleNumber(num){
  if(currentValue.length <= 9){
    currentValue += num;
  }
}

console.log("hi")


//Read inputs from the user
//const num1 = prompt("Enter a number: ");
//const operator = prompt("Enter an operator (+, -, *, /): ");
//const num2 = prompt("Enter another number: ");

// Convert the inputs from strings to numbers
//const number1 = Number(num1);
//const number2 = Number(num2);

// Define the functions for the different operations
// function add(a, b) {
//     return a + b;
// }
// function subtract(a, b) {
//     return a - b;
// }
// function multiply(a, b) {
//     return a * b;
// }
// function divide(a, b) {
//     return a / b;
// }

// // Call the appropriate function based on the operator
// let result;
// if (operator === '+') {
//   result = add(number1, number2);
// } else if (operator === '-') {
//   result = subtract(number1, number2);
// } else if (operator === '*') {
//   result = multiply(number1, number2);
// } else if (operator === '/') {
//   result = divide(number1, number2);
// }

// // Print the result to the console
// console.log(result);
