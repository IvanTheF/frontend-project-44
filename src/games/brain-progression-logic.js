import startGame from "../index.js";
import randomNum from "../utils.js";

const instruction = "What number is missing in the progression?";

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

const generateRoundProgression = () => {
  const stepProgression = randomNum(2, 10);
  const startNum = randomNum(1, 20);
  const lengthProgression = randomNum(5, 10);

  const progression = getProgression(
    startNum,
    stepProgression,
    lengthProgression
  );
  const indexDisappearElement = randomNum(0, progression.length - 1);

  const rightAnswer = String(progression[indexDisappearElement]);

  progression[indexDisappearElement] = "..";

  const question = progression.join(" ");

  return [question, rightAnswer];
};

const starProgressionGame = () =>
  startGame(instruction, generateRoundProgression);

export default starProgressionGame;
