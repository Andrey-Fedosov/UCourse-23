'use strict';
// const currentScore0Element = document.querySelector('#current--0');
// const currentScore1Element = document.querySelector('#current--1');
// const score0Element = document.querySelector('#score--0');
// const score1Element = document.getElementById('score--1');
// const player0Element = document.querySelector('.player--0');
// const player1Element = document.querySelector('.player--1');

// //////////buttons////////
// const btnNewGame = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');
// const diceElement = document.querySelector('.dice');
// //////////current score Element//////
// let scores, currentScore, activePlayer, playing;

// currentScore = 0;
// scores = [0, 0];
// activePlayer = 0;
// playing = true;

// diceElement.classList.add('hidden');
// score0Element.textContent = 0;
// score1Element.textContent = 0;

// const switchPlayer = function () {
//   document.querySelector(`#current--${activePlayer}`).textContent = 0;
//   activePlayer = activePlayer === 0 ? 1 : 0;
//   currentScore = 0;
//   player0Element.classList.toggle('player--active');
//   player1Element.classList.toggle('player--active');
// };

// const initGame = function () {
//   activePlayer = 0;
//   scores = [0, 0];
//   currentScore = 0;
//   score0Element.textContent = 0;
//   score1Element.textContent = 0;
//   currentScore0Element.textContent = 0;
//   currentScore1Element.textContent = 0;
//   playing = true;
//   player0Element.classList.remove('player--winner');
//   player1Element.classList.remove('player--winner');
//   player0Element.classList.remove('player--active');
//   player1Element.classList.remove('player--active');
//   player0Element.classList.add('player--active');
// };

/////////////////////////Logic///////////

// btnRoll.addEventListener('click', function () {
//   let dicePoints = Math.trunc(Math.random() * 6) + 1;
//   diceElement.classList.remove('hidden');
//   diceElement.src = `dice-${dicePoints}.png`;

//   if (dicePoints != 1) {
//     currentScore += dicePoints;
//     document.getElementById(`current--${activePlayer}`).textContent =
//       currentScore;
//   } else {
//     document.getElementById(`current--${activePlayer}`).textContent = 0;
//     currentScore = 0;
//     activePlayer = activePlayer === 0 ? 1 : 0;
//     player0Element.classList.toggle('player--active');
//     player1Element.classList.toggle('player--active');
//   }
// });

// if (dicePoints != 1) {
//   scoreCounter += dicePoints;
// }
/* btnRoll.addEventListener('click', function () {
  if (playing) {
    const dicePoints = Math.trunc(Math.random() * 6) + 1;
    diceElement.src = `dice-${dicePoints}.png`;
    diceElement.classList.remove('hidden');

    if (dicePoints != 1) {
      currentScore += dicePoints;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else { */
/* document.querySelector(`#current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0Element.classList.toggle('player--active');
    player1Element.classList.toggle('player--active'); */
/*       switchPlayer();
    }
  } else {
    diceElement.classList.add('hidden');
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 25) {
      playing = false;
      diceElement.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      switchPlayer();
    }
  }
});

btnNewGame.addEventListener('click', initGame); */

/////buttons
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');
const diceElement = document.querySelector('.dice');

//////Elements
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
const score1Element = document.querySelector('#score--1');
const score0Element = document.querySelector('#score--0');
const currentScore0Element = document.querySelector('#current--0');
const currentScore1Element = document.querySelector('#current--1');

/////
let currentScore, score, playing, activePlayer;

currentScore = 0;
playing = true;
activePlayer = 0;
score = [0, 0];

///////starting conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

//////functions
const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textcontent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
};

const gameInit = function () {
  playing = true;
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  diceElement.classList.add('hidden');
  currentScore0Element.textContent = 0;
  currentScore1Element.textContent = 0;
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  player0Element.classList.remove('player--winner');
  player1Element.classList.remove('player--winner');
  player0Element.classList.add('player--active');
  player1Element.classList.remove('player--active');
};

///////logic
btnRoll.addEventListener('click', function () {
  if (playing) {
    const dicePoints = Math.trunc(Math.random() * 6) + 1;
    diceElement.src = `dice-${dicePoints}.png`;
    diceElement.classList.remove('hidden');

    if (dicePoints != 1) {
      currentScore += dicePoints;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    score[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      score[activePlayer];
    if (score[activePlayer] >= 25) {
      diceElement.classList.add('hidden');
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      switchPlayer();
    }
  }
});

btnNewGame.addEventListener('click', gameInit);
