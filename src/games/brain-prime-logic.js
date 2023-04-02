import startGame from '../index.js';
import generateRandomNumber from '../randomNumber.js';

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (number) => {
  if (number < 2) {
    return false;
  }

  let divider = 2;

  while (divider <= number / 2) {
    if (number % divider === 0) {
      return false;
    }
    divider += 1;
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
