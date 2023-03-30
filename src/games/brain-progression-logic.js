import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const instruction = 'What number is missing in the progression?';

const getProgression = (startNum, stepProgression, lengthProgression) => {
  const result = [];

  for (
    let i = startNum;
    result.length <= lengthProgression;
    i += stepProgression
  ) {
    result.push(i);
  }
  return result;
};

const generateRoundData = () => {
  const stepProgression = generateRandomNumber(2, 10);
  const startNum = generateRandomNumber(1, 20);
  const lengthProgression = generateRandomNumber(5, 10);

  const progression = getProgression(
    startNum,
    stepProgression,
    lengthProgression,
  );
  const indexDisappearElement = generateRandomNumber(0, progression.length - 1);

  const rightAnswer = String(progression[indexDisappearElement]);

  progression[indexDisappearElement] = '..';

  const question = progression.join(' ');

  return [question, rightAnswer];
};

const starProgressionGame = () => startGame(instruction, generateRoundData);

export default starProgressionGame;
