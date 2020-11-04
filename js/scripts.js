//User Interface Logic


//Business Logic

function Player(name) {
  this.name = name;
  this.totalScore = 0;
  this.roundScore = 0;
  this.dice = 0; 
  this.hold = false;
}

let playerOne = new Player("Player 1");
let playerTwo = new Player("Player 2");

let isPlayerOne = true;

Player.prototype.diceRoll = function () {
  this.dice = Math.floor(Math.random() * 6) + 1;
  if (this.dice === 1) {
    console.log("Your turn is over");
    this.roundScore = 0;
    isPlayerOne = !isPlayerOne;
  } else if (this.dice !==1 && this.hold === false) {
    this.roundScore += this.dice;
    if(this.totalScore + this.roundScore >= 100) {
      declareWinner(this.name);
    }
    return;
  }
}

Player.prototype.holdDice = function () {
  if (this.hold === true) {
    this.totalScore += this.roundScore;
    this.roundScore = 0;
    isPlayerOne = !isPlayerOne;
    return;
  }
}

function turnTest() {
  if (isPlayerOne == true) {
    playerOne.diceRoll();
  } else {
    playerTwo.diceRoll();
  }
}

// UI Logic

function declareWinner(element) {
  console.log(element + " wins");
}


$(document).ready(function() {
  $("button#roll").click(function(event) {
    event.preventDefault();
    console.log("hello");
    turnTest();
    $(".player1score").text(playerOne.roundScore, playerOne.totalScore);
    $(".player2score").text(playerTwo.roundScore, playerTwo.totalScore);
  });
});

//listener boolean hold to true
