//User Interface Logic


//Business Logic

function Player(name) {
  this.name = name;
  this.totalScore = 0;
  this.roundScore = 0;
  this.turn = false;
  this.dice = 0;
}

let playerOne = new Player();
let playerTwo = new Player();

Player.prototype.diceRoll = function () {
this.dice = Math.floor(Math.random() * 6) + 1;
console.log(this.dice);
}
// if (dice ===1 )
// return false;
// else if (dice !== 1)
// return roundScores

// player 1's turn
// either roll or hold
// if roll 1, set playerTwo turn to true
// then proceed to allow playerTwo to play
