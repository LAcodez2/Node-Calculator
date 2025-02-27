var readlineSync = require("readline-sync");

function getOperation() {
    while (true) {
        let operation = readlineSync.question("What operation would you like to perform? (+, -, *, /): ");
        if (["+", "-", "*", "/"].includes(operation)) {
            return operation;
        } else {
            console.log("That is not a valid operation");
        }
    }
}

function getNumber(promptText) {
    while (true) {
        let input = readlineSync.question(promptText);
        let number = parseFloat(input);
        if (!(number)) {
            return number;
        } else {
            console.log("This is not a number");
        }
    }
}

function calculate(op, num1, num2) {
    switch (op) {
        case "+": return num1 + num2;
        case "-": return num1 - num2;
        case "*": return num1 * num2;
        case "/": return num2 !== 0 ? num1 / num2 : "Undefined (division by zero)";
    }
}

function main() {
    let operation = getOperation();
    let num1 = getNumber("Please enter the first number: ");
    let num2 = getNumber("Please enter the second number: ");
    let result = calculate(operation, num1, num2);
    console.log(`The result is: ${result}`);
}

main();

