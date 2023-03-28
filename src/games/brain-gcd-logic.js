import startGame from '../index.js';
import randomNum from '../utils.js';

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

const generateRoundGcd = () => {
  const firstNumber = randomNum(1, 100);
  const secondNumber = randomNum(1, 100);

  const question = `${firstNumber} ${secondNumber}`;
  const rightAnswer = String(getGcd(firstNumber, secondNumber));

  return [question, rightAnswer];
};

const startGcdGame = () => startGame(instruction, generateRoundGcd);

export default startGcdGame;
