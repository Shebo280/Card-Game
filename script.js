'use strict';
//saving the element I will need to access in variables
let firstPlayerName = document.querySelector('#name--0');
let secondPlayerName = document.querySelector('#name--1');
let firstPLayerScore = document.querySelector('#score--0');
let secondPLayerScore = document.querySelector('#score--1');
let firstPLayerCurrent = document.querySelector('#current--0');
let secondPLayerCurrent = document.querySelector('#current--1');
let card = document.querySelector('.card');
let playingGame = true;
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');
const btnRollCard = document.querySelector('.btn--roll');
const firstPlayerTurn = document.querySelector('.player--0').classList;
const secondPlayerTurn = document.querySelector('.player--1').classList;
// Starting Conditions
card.classList.add('hidden');
firstPLayerScore.textContent = 0;
secondPLayerScore.textContent = 0;
firstPlayerName.textContent = prompt('Enter the first player name');
secondPlayerName.textContent = prompt('Enter the second player name');
// help functions
const swithPlayer = function () {
  firstPLayerCurrent.textContent = 0;
  secondPLayerCurrent.textContent = 0;
  firstPlayerTurn.toggle('player--active');
  secondPlayerTurn.toggle('player--active');
};
// if gameends it doesn't allow to pick a card again and change the background of winner player and his name too
const gameEnds = function (i) {
  if (i === 'first') {
    playingGame = false;
    firstPlayerTurn.remove('player--active');
    firstPlayerTurn.add('player--winner');
    firstPlayerName.textContent += ' is the winner 🥇';
  } else {
    playingGame = false;
    secondPlayerTurn.remove('player--active');
    secondPlayerTurn.add('player--winner');
    secondPlayerName.textContent += ' is the winner 🥇';
  }
  card.classList.add('hidden');
};
const resetPlayerScore = function () {
  card.classList.add('hidden');
  firstPLayerScore.textContent = 0;
  secondPLayerScore.textContent = 0;
  firstPLayerCurrent.textContent = 0;
  secondPLayerCurrent.textContent = 0;
  firstPlayerTurn.add('player--active'); // syarting with the first player
  firstPlayerTurn.remove('player--winner');
  secondPlayerTurn.remove('player--active');
  secondPlayerTurn.remove('player--winner');
  firstPlayerName.textContent = prompt('Enter the first player name');
  secondPlayerName.textContent = prompt('Enter the second player name');
  playingGame = true;
};
const holdScore = function () {
  if (playingGame) {
    if (firstPlayerTurn.contains('player--active')) {
      firstPLayerScore.textContent =
        Number(firstPLayerCurrent.textContent) +
        Number(firstPLayerScore.textContent);
      if (Number(firstPLayerScore.textContent) >= 100) gameEnds('first');
    } else {
      secondPLayerScore.textContent =
        Number(secondPLayerCurrent.textContent) +
        Number(secondPLayerScore.textContent);
      if (Number(secondPLayerScore.textContent) >= 100) gameEnds('second');
    }
    swithPlayer();
  }
};
const pickCard = function () {
  if (playingGame) {
    //showing the card at the start of the game
    card.classList.remove('hidden');
    //generating random number for card
    let number = Math.trunc(Math.random() * 10 + 1);
    console.log(number);
    //switching to correct image
    card.src = `Card${number}.png`;
    // if the number===1 we will switch to another player
    if (number === 1) swithPlayer();
    //if the number!==1 then we will add the number of card to current
    else {
      if (firstPlayerTurn.contains('player--active'))
        firstPLayerCurrent.textContent =
          Number(firstPLayerCurrent.textContent) + number;
      else
        secondPLayerCurrent.textContent =
          Number(secondPLayerCurrent.textContent) + number;
    }
  }
};
btnNewGame.addEventListener('click', resetPlayerScore);
btnHold.addEventListener('click', holdScore);
btnRollCard.addEventListener('click', pickCard);
