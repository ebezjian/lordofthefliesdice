//Business Logic

function Player(name) {
  this.name = name;
  this.totalScore = 0;
  this.roundScore = 0;
  this.dice1 = 0; 
  this.dice2 = 0;
  this.hold = false;
}

let playerOne = new Player("Player 1");
let playerTwo = new Player("Player 2");

let isPlayerOne = true;

Player.prototype.diceRoll = function () {
  this.dice1 = Math.floor(Math.random() * 6) + 1;
  this.dice2 = Math.floor(Math.random() * 6) + 1;
  if (this.dice1 === 1 && this.dice2 === 1) {
    this.roundScore += this.dice1 + this.dice2 + 25;
  } else if (this.dice1 === 1 || this.dice2 === 1) {
    console.log("You rolled a 1. Your turn is over.");
    this.roundScore = 0;
    isPlayerOne = !isPlayerOne;
  } else if (this.dice1 != 1 && this.dice2 != 1 && this.hold === false) {
    this.roundScore += this.dice1 + this.dice2;
    console.log(this.roundScore);
    return;
  }
}

Player.prototype.holdDice = function () {
  if (this.hold === true) {
    this.totalScore += this.roundScore;
    this.roundScore = 0;
    isPlayerOne = !isPlayerOne;
    this.hold = false;
    return;
  }
}

function turnTest() {
  if (isPlayerOne === true) {
    playerOne.diceRoll();
  } else {
    playerTwo.diceRoll();
  }
  checkForWinner();
}

// UI Logic

function checkForWinner() {
  if (playerOne.totalScore >= 100) {
    playerOne.declareWinner(playerOne.name);
    $(".winner").append("Player One");
  } else if (playerTwo.totalScore >= 100) {
    playerTwo.declareWinner(playerTwo.name);
    $(".winner").append("Player Two");
  }
}

Player.prototype.declareWinner = function(name) {
  playerOne.roundScore = 0;
  playerOne.totalScore = 0;
  playerTwo.roundScore = 0;
  playerTwo.totalScore = 0;
  return;
}

$(document).ready(function() {
  $("button#roll").click(function(event) {
    event.preventDefault();
    turnTest();
    $(".player1total").text(playerOne.totalScore);
    $(".player1round").text(playerOne.roundScore);
    $(".player2total").text(playerTwo.totalScore);
    $(".player2round").text(playerTwo.roundScore);
    });
  $("button#hold").click(function(event) {
    event.preventDefault();
    if (isPlayerOne === true) {
      playerOne.hold = true;
      playerOne.holdDice();
    } else {
      playerTwo.hold = true;
      playerTwo.holdDice();
    }
  });
});

//listener boolean hold to true
