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

//find the objects with the highest currentHP
function findHighestHP(targets){
  //go through each object and find the hightest HP on the board
  var highestHP = 0;
  for (var i=0;i<targets.length;i++){
    if (targets[i].currentHP > highestHP){
      highestHP = targets[i].currentHP;
    }
  }
  //return an array with all targets whose currentHP is equal to the highest HP
  return targets.filter(function(target){return target.currentHP == highestHP});
}

//find the objects with the lowest currentHP
function findLowestHP(targets){
  //go through each object and find the lowest HP on the board
  var lowestHP = 0;
  for (var i=0;i<targets.length;i++){
    if (targets[i].currentHP < lowestHP){
      lowestHP = targets[i].currentHP;
    }
  }
  //return an array with all targets whose currentHP is equal to the lowest HP
  return targets.filter(function(target){return target.currentHP == lowestHP});
}
