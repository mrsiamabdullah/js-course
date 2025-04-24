//? Personal budget tracker:

// User name
let userName = "Md Ruhul Amin";
console.log(`User: ${userName}`); // User Name

// User income
let userIncome = 8000;
console.log(`User Income: $${userIncome}`); // User Income

// Tex deduction
let taxCalculation = userIncome * 0.1; // tax 10%
console.log(`Tax Deducted 10%: $${taxCalculation}`);

// Net income after tax
let netIncome = userIncome - taxCalculation;
console.log(`Net Income after Tax: $${netIncome}`);

// Calculate the expense
let carService, groceries, entertainment, tuitionFees, homeRent, salami;

carService = 650;
groceries = 300;
entertainment = 350;
tuitionFees = 1200;
homeRent = 2000;
salami = 500;

total =
  carService + groceries + entertainment + tuitionFees + homeRent + salami;

// Total expense
let userExpenses = total;
console.log(`User Expense: $${userExpenses}`); // User Expense

// Remaining balance
let remainingBalance = netIncome - userExpenses;
console.log(`Remaining Balance: $${remainingBalance}`);

// Savings
let savings = remainingBalance * 0.2;
console.log(`Saving (20% of Balance): $${savings}`);

// Financial health status
if (savings > 1000) console.log("Excellent! You are saving well!");
else if (savings >= 500) console.log("Good! You have a decent savings amount.");
else if (savings >= 100)
  console.log("Needs Improvement. Consider reducing expenses.");
else console.log("Critical! Your savings are too low!");

// Overspending Message
let overSpendingMessage = " ";
if (userExpenses > userIncome) {
  overSpendingMessage = "Warning: You are spending more then your income.";
}
console.log(overSpendingMessage);
