// Arithmetic operator

//> +, -, *, /, ++, --, **, %

// Assignment operator

//> =, +=, -=, *=, /=, %=, **=

// let x = 5;
// x += 3; // x = x + 3

// console.log(x);

// Making a basic calculator
let numberOne, numberTwo;

numberOne = prompt("Enter your first number: ");
numberTwo = prompt("Enter your second number: ");

numberOne = Number(numberOne);
numberTwo = Number(numberTwo);

addition = numberOne + numberTwo;
subtraction = numberOne - numberTwo;
multiplication = numberOne * numberTwo;
division = numberOne / numberTwo;
remainder = numberOne % numberTwo;

document.write(numberOne, " + ", numberTwo, " = ", addition, "</br>");
document.write(numberOne, " - ", numberTwo, " = ", subtraction, "</br>");
document.write(numberOne, " * ", numberTwo, " = ", multiplication, "</br>");
document.write(numberOne, " / ", numberTwo, " = ", division, "</br>");
document.write(numberOne, " % ", numberTwo, " = ", remainder, "</br>");
