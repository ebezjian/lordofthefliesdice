//User Interface Logic


//Business Logic

function Player() {
  this.totalScore = 0;
  this.roundScore = 0;
  this.dice = 0; 
  this.hold = false;
}

let playerOne = new Player();
let playerTwo = new Player();

let isPlayerOne = true;

Player.prototype.diceRoll = function () {
  this.dice = Math.floor(Math.random() * 6) + 1;
  if (this.dice === 1) {
    console.log("Your turn is over");
    this.roundScore = 0;
    isPlayerOne = !isPlayerOne;
  } else if (this.dice !==1 && this.hold === false) {
    this.roundScore += this.dice;
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


hold button 
listener 
turn is over 
boolean switches


//listener boolean hold to true
