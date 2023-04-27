'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// const guessValue = document.querySelector('.guess');

// guessValue.value = 23;
// console.log(guessValue.value);

// document.querySelector('.message').textContent = 'Correct Number!!!';

// document.querySelector('.number').textContent = 15;
// document.querySelector('.score').textContent = 16;

// document.querySelector('.guess').value = 17;

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;

// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

// // displayMessage('hi pippah');

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   if (!guess) {
//     displayMessage('Not number');
//   } else if (guess === secretNumber) {
//     displayMessage('Correct Number');
//     document.querySelector('.number').textContent = secretNumber;

//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';

//     if (score > highscore) {
//       highscore = score;
//       document.querySelector('.highScore').textContent = highscore;
//     }
//   } else if (guess !== secretNumber) {
//     if (score > 1) {
//       displayMessage(guess > secretNumber ? 'too high' : 'too low');
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       displayMessage('you loose the game');
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

// document.querySelector('body').style.backgroundColor = '#60b347';
// document.querySelector('.message').textContent = 'hello andy';

// console.log(document.querySelector('.message'));

/* let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

let generateMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

console.log(secretNumber);
document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  if (!guessNumber) {
    generateMessage('It is not number');
    // document.querySelector('.message').textContent = 'It is not number';
  } else if (guessNumber === secretNumber) {
    generateMessage('you are the   winner');
    // document.querySelector('.message').textContent = 'you are the   winner';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (score > 1) {
    guessNumber > secretNumber
      ? generateMessage('too high')
      : generateMessage('too low');
    score--;
    document.querySelector('.score').textContent = score;
    // if (guessNumber > secretNumber) {
    //   document.querySelector('.message').textContent = 'too high';
    //   score--;
    //   document.querySelector('.score').textContent = score;
    // } else if (guessNumber < secretNumber) {
    //   document.querySelector('.message').textContent = 'too low';
    //   score--;
    //   document.querySelector('.score').textContent = score;
    // }
  } else {
    document.querySelector('.message').textContent = 'you lose';
    document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = 'red';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'start guessing';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
}); */

/* let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const messageElement = document.querySelector('.message');
const btnCheck = document.querySelector('.check');
const scoreElement = document.querySelector('.score');
const secretNumberElement = document.querySelector('.number');
const btnAgain = document.querySelector('.again');

btnCheck.addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  if (!guessNumber) {
    messageElement.textContent = 'this is not number';
  }
  if (guessNumber === secretNumber) {
    secretNumberElement.textContent = secretNumber;
    messageElement.textContent = 'You are the winner';
    secretNumberElement.style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (score > 1) {
    if (guessNumber > secretNumber) {
      messageElement.textContent = 'too high';
      score--;
      scoreElement.textContent = score;
    } else if (guessNumber < secretNumber) {
      messageElement.textContent = 'too low';
      score--;
      scoreElement.textContent = score;
    }
  } else {
    messageElement.textContent = 'you lose';
    score = 0;
    scoreElement.textContent = score;
  }
});

btnAgain.addEventListener('click', function () {
  score = 20;
  scoreElement.textContent = score;
  secretNumberElement.textContent = '?';
  secretNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(secretNumber);
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  secretNumberElement.style.width = '15rem';
  messageElement.textContent = 'Start guessing';
}); */

// let score = 20;
// let highScore = 0;
// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNumber);

// /////elements
// let displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

// displayMessage('Start guessing');
// document.querySelector('.score').textContent = 20;
// document.querySelector('.highscore').textContent = 0;

// document.querySelector('.check').addEventListener('click', function () {
//   let guessNumber = Number(document.querySelector('.guess').value);
//   if (!guessNumber) {
//     displayMessage('it is not number');
//   } else if (guessNumber === secretNumber) {
//     document.querySelector('.number').textContent = secretNumber;
//     displayMessage('You win');
//     document.querySelector('.score').textContent = score;
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';
//     if (score > highScore) {
//       highScore = score;
//       document.querySelector('.highscore').textContent = highScore;
//     }
//   } else if (score > 1) {
//     displayMessage(guessNumber > secretNumber ? 'too high' : 'too low');
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     displayMessage('you lose');
//     document.querySelector('.score').textContent = 0;
//   }
// });

// document.querySelector('.again').addEventListener('click', function () {
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   score = 20;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';
//   document.querySelector('.score').textContent = score;
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
//   displayMessage('start guessing');
// });

let score = 20;
let highScore = 0;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

const numberElement = document.querySelector('.number');
let scoreElement = document.querySelector('.score').textContent;
scoreElement = 20;

const showMessage = function (message) {
  const messageElement = (document.querySelector('.message').textContent =
    message);
};

document.querySelector('.check').addEventListener('click', function () {
  const guessElement = Number(document.querySelector('.guess').value);
  if (score > 0) {
    if (!guessElement) {
      showMessage('this is not number');
    } else if (guessElement === secretNumber) {
      numberElement.textContent = secretNumber;
      scoreElement = score;
      showMessage('you win');
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('body').style.backgroundColor = '#60b347';
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else if (guessElement < secretNumber) {
      showMessage('too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guessElement > secretNumber) {
      showMessage('too high');
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    scoreElement = 0;
    showMessage('you lose');
    document.querySelector('body').style.backgroundColor = 'red';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // console.log(secretNumber);
  score = 20;
  document.querySelector('.score').textContent = 20;
  showMessage('start guessing...');
  numberElement.textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
