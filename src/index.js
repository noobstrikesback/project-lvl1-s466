import readlineSync from 'readline-sync';

const MIN = 0;
const MAX = 100;
let number = 0;
let userAnswer = '';
let userName = '';

export const greetUserByName = () => {
  userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
};

const getRandomNumber = (minValue, maxValue) => {
  const randomNumber = Math.floor(Math.random() * (maxValue - minValue) - minValue);
  return randomNumber;
};

const isEven = num => num % 2 === 0;

const printQuestion = () => {
  number = getRandomNumber(MIN, MAX);
  console.log(`Question: ${number}`);
};

const setUserAnswer = () => {
  userAnswer = readlineSync.question('Your answer: ');
};

export const checkUserAnswer = () => {
  let i = 0;
  while (i < 3) {
    printQuestion();
    setUserAnswer();
    if ((isEven(number) && userAnswer === 'yes') || (!isEven(number) && userAnswer === 'no')) {
      console.log('Correct!');
      i += 1;
    } else if (isEven(number) && userAnswer === 'no') {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'.`);
      console.log('Let\'s try again, Bill!');
      i = 0;
    } else if (!isEven(number) && userAnswer === 'yes') {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'.`);
      console.log('Let\'s try again, Bill!');
      i = 0;
    } else {
      console.log(`Error, '${userAnswer}' is wrong input, try again.`);
      i = 0;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
