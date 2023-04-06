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
  const question = generateRandomNumber(1, 100);

  const rightAnswer = isPrimeNumber(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const startPrimeGame = () => startGame(instruction, generateRoundData);

export default startPrimeGame;
