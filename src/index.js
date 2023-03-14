#!/usr/bin/env node

import readlineSync from "readline-sync";
import welcomeName from "../src/cli.js";

const startGame = (instruction, generateRoundData) => {
  const name = welcomeName();
  console.log(instruction);

  const rounds = 3;

  for (let i = 0; i < rounds; i += 1) {
    const [question, rightAnswer] = generateRoundData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question("Your answer: ").trim();

    if (userAnswer === rightAnswer) {
      console.log("Correct!");
    } else {
      console.log(
        `${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`
      );
      console.log(`Let's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default startGame;
