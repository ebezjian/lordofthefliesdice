//User Interface Logic


//Business Logic

function Player() {
 
  this.totalScore = 0;
  this.roundScore = 0;
  this.turn = false;
  this.dice = 0; 
  this.hold = false;
}

let playerOne = new Player();
let playerTwo = new Player();

playerOne.turn = true;

Player.prototype.diceRoll = function () {
  this.dice = Math.floor(Math.random() * 6) + 1;
  if (this.dice === 1) {
    console.log("your turn is over");
    this.roundScore = 0;
    this.turn = false;
  } else if (this.dice !==1 && this.hold === false) {
    this.roundScore += this.dice;
    return;
  }
}

Player.prototype.holdDice = function () {
  if (this.hold === true) {
    this.totalScore += this.roundScore;
    this.roundScore = 0;
    this.turn === false;
    playerTwo.turn === true;
    return;
  }
}

Player.prototype.playerTurn = function () {
  if (playerOne.turn === true) {
  playerTwo.turn = false;
  } else if (playerTwo.turn === true) {
  playerOne.turn = false;
  }
}


hold button 
listener 
turn is over 
boolean switches


//listener boolean hold to true
