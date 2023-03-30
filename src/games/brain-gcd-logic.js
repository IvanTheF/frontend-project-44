import startGame from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const instruction = 'Find the greatest common divisor of given numbers.';

const getGcd = (firstNumber, secondNumber) => {
  let gcd;

  for (let i = 1; i <= firstNumber && i <= secondNumber; i += 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      gcd = i;
    }
  }
  return gcd;
};

const generateRoundData = () => {
  const firstNumber = generateRandomNumber(1, 100);
  const secondNumber = generateRandomNumber(1, 100);

  const question = `${firstNumber} ${secondNumber}`;
  const rightAnswer = String(getGcd(firstNumber, secondNumber));

  return [question, rightAnswer];
};

const startGcdGame = () => startGame(instruction, generateRoundData);

export default startGcdGame;
