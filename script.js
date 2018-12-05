var knight = {
  name:"The Knight",
  MAXHP: 32,
  currentHP: 32,
  deck:[
    {//The Knight deals 1 target 3 melee damage.
      cardName:"Heavy Swing",
      cardType:"oneshot",
      effect:function(){
        var target = window[prompt("Which is your target?")];
        damageHP(target, 3);
      }
    }
    ],
  hand:[],
  cardType:["hero", "target", "character"],
  trash:[]
};

var vanish = {
  name:"Vanish",
  MAXHP: 26,
  currentHP: 26,
  deck:["list of cards here"],
  hand:["cards in hand here"],
  cardType:["hero", "target", "character"],
  trash:[]
};

var quicksilver = {
  name:"Quicksilver",
  MAXHP: 25,
  currentHP: 25,
  deck:["list of cards here"],
  hand:["cards in hand here"],
  cardType:["hero", "target", "character"],
  trash:[]
};

var dendron = {
  name:"Dendron",
  MAXHP:50,
  currentHP:50,
  deck:["cards in deck here"],
  cardType:["villain", "target", "character"],
  trash:[]
};





function damageHP(target, amount){
  if(amount >= target.currentHP){
    target.currentHP = 0;
  } else {
    target.currentHP -= amount;
  }
  return target.currentHP;
}

function healHP(target, amount){
  if(amount >= (target.MAXHP - target.currentHP)){
    target.currentHP = target.MAXHP;
  } else {
    target.currentHP += amount;
  }
  return target.currentHP;
}

function drawCards(currentPlayer, amount){
  for(var i=0;i<amount;i++){
    currentPlayer.hand.push(currentPlayer.deck.pop());
  }
}

function playCard(currentPlayer, playedCard){
  currentPlayer.hand[playedCard].effect();
  currentPlayer.trash.push(currentPlayer.hand.splice(playedCard));
}