import generateRandomNumber from '../utils.js';
import startGame from '../index.js';

const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (number) => number % 2 === 0;

const generateRoundData = () => {
  const number = generateRandomNumber(1, 100);
  const question = number;
  const rightAnswer = isEvenNumber(number) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const startEvenGame = () => startGame(instruction, generateRoundData);

export default startEvenGame;
