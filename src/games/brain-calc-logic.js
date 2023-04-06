import startGame from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const instruction = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculate = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;

    case '-':
      return firstNumber - secondNumber;

    case '*':
      return firstNumber * secondNumber;

    default:
      return `Unknown operator: '${operator}'.`;
  }
};

const getRandomOperator = () => {
  const randomOperator = generateRandomNumber(0, operators.length - 1);
  const operator = operators[randomOperator];
  return operator;
};

const generateRoundData = () => {
  const firstNumber = generateRandomNumber(1, 50);
  const secondNumber = generateRandomNumber(1, 50);
  const operator = getRandomOperator();

  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const rightAnswer = String(calculate(firstNumber, secondNumber, operator));

  return [question, rightAnswer];
};

const startCalcGame = () => startGame(instruction, generateRoundData);

export default startCalcGame;
