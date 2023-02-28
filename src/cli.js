import readlineSync from "readline-sync";

const welcomeName = () => {
  console.log("Welcome to the Brain Games!");
  const usrName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${usrName}!`);
};

export default welcomeName;
