var knight = {
  name:"The Knight",
  MAXHP: 32,
  deck:[
    {//The Knight deals 1 target 3 melee damage.
      cardName:"Heavy Swing",
      cardType:"oneshot",
      effect:function(){
        var target = window[prompt("Which is your target?")];
        damageHP(this, target, 3);
      }
    },
    {//The Knight deals up to 2 targets 1 melee damage each.
      cardName:"Swift Strikes",
      cardType:"oneshot",
      effect:function(){
        var target = window[prompt("Which is your target?")];
        damageHP(target, 1);
        target = window[prompt("Which is your target?")];
        damageHP(this, target, 1);
      }
    },
    {//Draw a card. The Knight regains 2 HP.
      cardName:"Catch Your Breath",
      cardType:"oneshot",
      effect:function(){
        drawCards(knight, 1);
        healHP(knight, 2);
      }
    },
    {//When the Knight would be dealt damage, you may redirect that damage to this card.
      cardName:"Plate Mail",
      cardType:["equipment", "target"],
      MAXHP:5,
      effect:function(){
        //TODO redirect damage from the Knight to this card
      }
    }],
  cardType:["hero", "target", "character"],
  basePower:{
      text:"The Knight deals 1 target 1 melee damage",
      effect:function(){
        var target = window[prompt("Which is your target?")];
        damageHP(target, 1);
      }
    }
};

var vanish = {
  name:"Vanish",
  MAXHP: 26,
  deck:["list of cards here"],
  cardType:["hero", "target", "character"],
  basePower:{
    cardText:"Select a target. That target deals 1 other target 1 projectile damage.",
    effect:function(){
      var instigator = window[prompt("Who is dealing the damage?")];
      var target = window[prompt("Which is your target?")];
      damageHP(instigator, target, 1);
    }
  }
};

var quicksilver = {
  name:"Quicksilver",
  MAXHP: 25,
  deck:[
    {//The Knight deals 1 target 3 melee damage.
      cardName:"Heavy Swing",
      cardType:"oneshot",
      effect:function(){
        var target = window[prompt("Which is your target?")];
        damageHP(this, target, 3);
      }
    },
    {//The Knight deals up to 2 targets 1 melee damage each.
      cardName:"Swift Strikes",
      cardType:"oneshot",
      effect:function(){
        var target = window[prompt("Which is your target?")];
        damageHP(target, 1);
        target = window[prompt("Which is your target?")];
        damageHP(this, target, 1);
      }
    },
    {//Draw a card. The Knight regains 2 HP.
      cardName:"Catch Your Breath",
      cardType:"oneshot",
      effect:function(){
        drawCards(knight, 1);
        healHP(knight, 2);
      }
    }
    ],
  cardType:["hero", "target", "character"],
  basePower:{
    cardText:"Discard a card. If you do, draw 2 cards.",
    effect:function(){
      var selectedCard = prompt("Which card would you like to discard?");
      if(currentPlayer.hand !== []){
      discardCard(currentPlayer, selectedCard);
        drawCards(currentPlayer, 2);
      }
    }
  }
};

var dendron = {
  name:"Dendron",
  MAXHP:50,
  cardType:["villain", "target", "character"],
  deck:[{
    cardName:"Stained Wolf",
    MAXHP:8,
    currentHP:8,
    cardType:["tattoo", "villain", "target"],
    endOfTurn:function(){
      var target = damageHP(findNthHighestHP(players, 1),3);
    }
  }]
};
