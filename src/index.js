import readlineSync from 'readline-sync';

const startGame = (instruction, generateRoundData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(instruction);

  const rounds = 3;

  for (let i = 0; i < rounds; i += 1) {
    const [question, rightAnswer] = generateRoundData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ').trim();

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    console.log(`Congratulations, ${userName}!`);
  }
};

export default startGame;
