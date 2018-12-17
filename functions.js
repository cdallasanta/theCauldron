function damageHP(target, amount){
  debugger;
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

function discardCard(currentPlayer, targetCard){
  currentPlayer.hand.splice(targetCard);
}

function playCard(currentPlayer, playedCard){
  currentPlayer.hand[playedCard].effect();
  if(playedCard.cardType === "oneshot"){
    currentPlayer.trash.push(currentPlayer.hand.splice(playedCard));
  }
}

function destroyCard(owningPlayer, targetCard){
  owningPlayer.trash.push(owningPlayer.playArea.splice(targetCard));
}

function findHighestHP(targets){
  var highestHP = Math.max(null, targets.map(function(target){return target.currentHP}));
  return targets.map(function(target){return target.currentHP == highestHP});
}
