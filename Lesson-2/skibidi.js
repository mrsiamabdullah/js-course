// Arithmetic operator

//> +, -, *, /, ++, --, **, %

// Assignment operator

//> =, +=, -=, *=, /=, %=, **=

// let x = 5;
// x += 3; // x = x + 3

// console.log(x);

// Making a basic calculator
// let numberOne, numberTwo;

// numberOne = prompt("Enter your first number: ");
// numberTwo = prompt("Enter your second number: ");

// numberOne = Number(numberOne);
// numberTwo = Number(numberTwo);

// addition = numberOne + numberTwo;
// subtraction = numberOne - numberTwo;
// multiplication = numberOne * numberTwo;
// division = numberOne / numberTwo;
// remainder = numberOne % numberTwo;

// document.write(numberOne, " + ", numberTwo, " = ", addition, "</br>");
// document.write(numberOne, " - ", numberTwo, " = ", subtraction, "</br>");
// document.write(numberOne, " * ", numberTwo, " = ", multiplication, "</br>");
// document.write(numberOne, " / ", numberTwo, " = ", division, "</br>");
// document.write(numberOne, " % ", numberTwo, " = ", remainder, "</br>");

//? Relational Operator
// let data = 33 > 43;
// console.log(data);

// let value = 43 < 50;
// console.log(value);

// console.log(6 >= 6);
// console.log(11 <= 11);

// let String = "pen";
// let String2 = "paper";

// console.log(String > String2);
// console.log(String >= String2);
// console.log(String < String2);

// console.log(3 == "3");
// console.log(3 === "3");
// console.log(3 === 3);

// Logical operator
// let x = 44;
// let y = 23;
// let z = 33;

// console.log(z > y && x > y && y < z);
// console.log(z > y && x > y && y > z);
// console.log(z < y || x < y || y < z);
// console.log(z < y || x < y || y > z);

// console.log(!(x < y));
// console.log(!(x > y));

// i will not do this again i am already facing a lot of trouble
// now its time to stop

// let userNumber = prompt("Enter your number: ");
// if (userNumber > 0) console.log("The number is positive");
// else if (userNumber < 0) console.log("The number is negative");
// else console.log("The number is zero");

// Letter grade program
// let userGrade = prompt("Enter your number: ");

// if (userGrade > 100) console.log("Please enter a valid number");
// else if (userGrade >= 80) console.log("A+");
// else if (userGrade >= 70) console.log("A");
// else if (userGrade >= 60) console.log("A-");
// else if (userGrade >= 50) console.log("B");
// else if (userGrade >= 40) console.log("C");
// else if (userGrade >= 33) console.log("D");
// else console.log("Fail");

let letter = prompt("Enter a letter: ");

letter = letter.toUpperCase();

if (
  letter == "A" ||
  letter == "E" ||
  letter == "I" ||
  letter == "O" ||
  letter == "U"
) {
  console.log("The letter is vowel =", letter);
} else {
  console.log("The letter is consonant =", letter);
}
