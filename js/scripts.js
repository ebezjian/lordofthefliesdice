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
  if (this.dice === 1) {
    console.log("your turn is over");
    return false;
  } else if (this.dice !==1) {
    this.roundScore += this.dice;
  }
}



//listener boolean hold to true
