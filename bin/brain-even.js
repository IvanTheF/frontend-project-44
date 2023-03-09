#!/usr/bin/env node

import readlineSync from "readline-sync";

const even = (number) => number % 2 === 0;
const randomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const number = randomNum(1, 100);
const rightAnswer = even(number) ? "yes" : "no";
const rounds = 3;

const brainEven = () => {
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= rounds; i += 1) {
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question("Your answer: ").trim();

    if (userAnswer !== String(rightAnswer)) {
      console.log(
        `${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`
      );
      console.log(`Let's try again, ${name}!`);
    }
    console.log("Correct!");
  }
  console.log(`Congratulations, ${name}!`);
};
