import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const instruction = 'What is the result of the expression?';

const operations = ['+', '-', '*', '/'];

const calculate = (firstNumber, secondNumber, operation) => {
  switch (operation) {
    case '+':
      return firstNumber + secondNumber;

    case '-':
      return firstNumber - secondNumber;

    case '*':
      return firstNumber * secondNumber;

    case '/':
      return firstNumber / secondNumber;
  }
};

const generateRoundData = () => {
  const firstNumber = generateRandomNumber(1, 50);
  const secondNumber = generateRandomNumber(1, 50);

  const randomOperator = generateRandomNumber(0, operations.length - 1);
  const operation = operations[randomOperator];

  const question = `${firstNumber} ${operation} ${secondNumber}`;
  const rightAnswer = String(calculate(firstNumber, secondNumber, operation));

  return [question, rightAnswer];
};

const startCalcGame = () => startGame(instruction, generateRoundData);

export default startCalcGame;
