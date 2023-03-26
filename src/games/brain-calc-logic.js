import startGame from "../index.js";
import randomNum from "../utils.js";

const instruction = "What is the result of the expression?";

const operations = ["+", "-", "*", "/"];

const calculate = (firstNumber, secondNumber, operation) => {
  switch (operation) {
    case "+":
      return firstNumber + secondNumber;

    case "-":
      return firstNumber - secondNumber;

    case "*":
      return firstNumber * secondNumber;

    case "/":
      return firstNumber / secondNumber;

    default:
      return "Unknown operator.";
  }
};

const generateRoundCalc = () => {
  const firstNumber = randomNum(1, 50);
  const secondNumber = randomNum(1, 50);

  const randomOperator = randomNum(0, operations.length - 1);
  const operation = operations[randomOperator];

  const question = `${firstNumber} ${operation} ${secondNumber}`;
  const rightAnswer = String(calculate(firstNumber, secondNumber, operation));

  return [question, rightAnswer];
};

const startCalcGame = () => startGame(instruction, generateRoundCalc);

export default startCalcGame;