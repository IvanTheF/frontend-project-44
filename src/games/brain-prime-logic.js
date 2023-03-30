import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (number) => {
  if (number === 1) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRoundData = () => {
  const number = generateRandomNumber(1, 100);

  const question = number;
  const rightAnswer = isPrimeNumber(number) ? 'yes' : 'no';

  return [question, rightAnswer];
};

const startPrimeGame = () => startGame(instruction, generateRoundData);

export default startPrimeGame;
