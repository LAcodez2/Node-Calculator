const readlineSync = require("readline-sync");

const availOperations = ["+", "-", "*", "/"];

// const availOperations = {
//     "+": (num1, num2) => num1 + num2,
// }

function getOperation() {
  while (true) {
    let operation = readlineSync.question(
      "What operation would you like to perform? (+, -, *, /): "
    );
    if (availOperations.includes(operation)) {
      return operation;
    } else {
      console.log("That is not a valid operation");
    }
  }
}

function getNumber(promptText) {
  while (true) {
    const input = readlineSync.question(promptText);
    const number = parseInt(input);
    if (!isNaN(number)) {
      return number;
    } else {
      console.log("This is not a number");
    }
  }
}

function calculate(op, num1, num2) {
  switch (op) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 !== 0 ? num1 / num2 : "Undefined (division by zero)";
    default:
      console.log("Sorry, we cant't do this operation.");
  }
}

function main() {
  const operation = getOperation();
  const num1 = getNumber("Please enter the first number: ");
  const num2 = getNumber("Please enter the second number: ");
  const result = calculate(operation, num1, num2);
  console.log(`The result is: ${result}`);
}

main();
