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

window.alert(("The addition of your answers equals ") + add(number1, number2) + (". The difference between your answers equals ") + subtract(number1, number2) + ("The multiplication of your numbers equals ") + divide(number1, number2) + (". The division between your numbers equals") + divide(number1, number2) + ("."));


