let operator = '';
let previousValue = '';
let calculatedValue = 0;
let operandCount = 0;


let currentDisplay = ''; // This var will be used to track what's shown on screen
let leftValue = '';
let rightValue = '';
let clearBtn;
let decimalBtn;
let equalBtn;

let operatorBtns;
let numberBtns;

let previousScreenContainer;
let currentScreenContainer;


document.addEventListener("DOMContentLoaded", function() {
  //Store all components on HTML in our JS
  clearBtn = document.querySelector("#clear");
  decimalBtn = document.querySelector(".decimal");
  equalBtn = document.querySelector(".equal");

  operatorBtns = document.querySelectorAll(".operator");
  numberBtns = document.querySelectorAll(".number");

  previousScreenContainer = document.querySelector(".previous");
  currentScreenContainer = document.querySelector(".current");

  equalBtn.addEventListener('click', function() {
    calculatedValue = operate();
    console.log(calculatedValue);
    previousScreenContainer.innerText = calculatedValue;
    currentScreenContainer.textContent = '';
  });

//Grabs the numbers from the DOM when element is clicked
numberBtns.forEach((number) => number.addEventListener("click", function(e) {
  if (operandCount < 15) {
      currentDisplay += e.target.textContent;
      currentScreenContainer.textContent = currentDisplay;
      operandCount++;

      if (operator === '') {
        leftValue += e.target.textContent;
      } else {
        rightValue += e.target.textContent;
      }
  }
}));

  operatorBtns.forEach((operatorBtn) => operatorBtn.addEventListener("click", function(e) {
    operator = e.target.textContent;
    console.log(operator);
    currentDisplay = currentDisplay + operator;
    currentScreenContainer.textContent = currentDisplay;
  }));

  decimalBtn.addEventListener("click", function(e) {
    currentDisplay += ".";
    currentScreenContainer.textContent = currentDisplay;
    if (operator === '') {
      leftValue += ".";
    } else {
      rightValue += ".";
    }
  });

  clearBtn.addEventListener('click', clearInputs);
});


/**
1.load html content, css
2.clear input
3.store number button pressed
4.store operator button pressed
5. caluculate operation
6. update result
7. clear result when C is pressed
*/

function clearInputs() {
  calculatedValue = 0;
  currentDisplay = '';
  leftValue = '';
  rightValue = '';
  operator = '';
  currentScreenContainer.textContent = '';
  previousScreenContainer.textContent = '';
}


//Function limits length to 9 digits and displays current value on screen
// '1111111'
function handleNumber(num) {
  console.log(currentValue.toString().length, currentValue)
  if (currentValue.toString().length < 9) {
    currentValue += num;
  }
}

function operate() {
  console.log(leftValue, rightValue, operator);
  // Call the appropriate function based on the operator
  const number1 = parseFloat(leftValue);
  const number2 = parseFloat(rightValue);
  let result;

  if (operator === '+') {
    result = add(number1, number2);
  } else if (operator === '-') {
    result = subtract(number1, number2);
  } else if (operator === 'x') {
    result = multiply(number1, number2);
  } else if (operator === '/') {
    result = divide(number1, number2);
  }

  return result;
}

//Read inputs from the user
//const num1 = prompt("Enter a number: ");
//const operator = prompt("Enter an operator (+, -, *, /): ");
//const num2 = prompt("Enter another number: ");

// Convert the inputs from strings to numbers
//const number1 = Number(num1);
//const number2 = Number(num2);

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



// // Print the result to the console
// console.log(result);
