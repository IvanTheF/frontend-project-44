import randomNum from "../utils.js";
import startGame from "../index.js";

const instruction =
  'Answer "yes" if the number is even, otherwise answer "no".';

const minNumber = 1;
const maxnumber = 100;

const evenNum = (number) => number % 2 === 0;

const generateRoundData = () => {
  const number = randomNum(minNumber, maxnumber);
  const question = number;
  const rightAnswer = evenNum(number) ? "yes" : "no";
  return [question, rightAnswer];
};

const startEvenGame = () => startGame(generateRoundData, instruction);

export default startEvenGame;
