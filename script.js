class Hero{
  constructor(hero){
    this.name = hero.name;
    this.MAXHP = hero.MAXHP;
    this.basePower = hero.basePower;
    this.currentHP = this.MAXHP;
    this.hand = [];
    this.trash = [];
    this.playArea = [];
    this.deck = hero.deck;
  }
}

class Villain{
  constructor(villain){
    this.name = villain.name;
    this.MAXHP = villain.MAXHP;
    this.currentHP = this.MAXHP;
    let trash = [];
    this.playArea = [];
    this.deck = villain.deck;
  }
}

var player1 = new Hero(knight);
var player2 = new Hero(vanish);
var player3 = new Hero(quicksilver);
var players = [player1, player2, player3];
var H = players.length;

var mainVillain = new Villain(dendron);

var phaseOrder = ["Start", "Play", "Draw", "End"];

var currentPlayer = mainVillain;
var currentPhase = phaseOrder[0];