import randomNum from "../utils.js";
import startGame from "../index.js";

const instruction =
  'Answer "yes" if the number is even, otherwise answer "no".';

const evenNum = (number) => number % 2 === 0;

const generateRoundData = () => {
  const number = randomNum(1, 100);
  const question = number;
  const rightAnswer = evenNum(number) ? "yes" : "no";
  return [question, rightAnswer];
};

const startEvenGame = () => startGame(instruction, generateRoundData);

export default startEvenGame;
