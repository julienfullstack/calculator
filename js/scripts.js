//business logic
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}


//user interface logic

// user interface logic 
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
const stringNumber1 = number1.toString();
const stringNumber2 = number2.toString();




window.alert( 
(stringNumber1) + (" + ") + 
(stringNumber2) + (" = ") + 
add(number1, number2) + 
(", ") + 
(stringNumber1) + (" - ") + 
(stringNumber2) + (" = ") +
subtract(number1,number2) + 
(", ") +
(stringNumber1) + (" / ") + 
(stringNumber2) + (" = ") +
divide(number1, number2) + 
(", ") +
(stringNumber1) + (" x ") + 
(stringNumber2) + (" = ") +
multiply(number1, number2) +
(".")
);


