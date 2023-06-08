//business logic
function add(number1, number2) {
  return number1 + number2;
}

//user interface logic

// user interface logic 
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

window.alert("The addition of your answers equals" + add(number1, number2));

