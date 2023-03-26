import startGame from "../index.js";
import randomNum from "../utils.js";

const instruction =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number === 1) {
    return false;
  } else if (number === 2) {
    return true;
  } else {
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
};

const generateRoundPrime = () => {
  const number = randomNum(1, 100);

  const question = number;
  const rightAnswer = isPrime(number) ? "yes" : "no";

  return [question, rightAnswer];
};

const startPrimeGame = () => startGame(instruction, generateRoundPrime);

export default startPrimeGame;
