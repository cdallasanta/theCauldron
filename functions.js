//reduce a target's currentHP
function damageHP(target, amount){
  debugger;
  if(amount >= target.currentHP){
    target.currentHP = 0;
  } else {
    target.currentHP -= amount;
  }
}

//increase a target's currentHP
function healHP(target, amount){
  if(amount >= (target.MAXHP - target.currentHP)){
    target.currentHP = target.MAXHP;
  } else {
    target.currentHP += amount;
  }
}

//draw a number of cards from the player's deck
function drawCards(currentPlayer, amount){
  for(var i=0;i<amount;i++){
    currentPlayer.hand.push(currentPlayer.deck.pop());
  }
}

//discard a chosen card from the player's hand
function discardCard(currentPlayer, targetCard){
  currentPlayer.hand.splice(targetCard);
}

//play a chosen card from the player's hand
function playCardFromHand(currentPlayer, playedCard){
  currentPlayer.hand[playedCard].effect();
  if(playedCard.cardType === "oneshot"){
    currentPlayer.trash.push(currentPlayer.hand.splice(playedCard));
  }
}

//move a target from the play area to the trash
function destroyCard(owningPlayer, targetCard){
  owningPlayer.trash.push(owningPlayer.playArea.splice(targetCard));
}

//find the objects with the highest currentHP
function findNthHighestHP(targets, n=1){
  //put the HPs of all targets in an array, then set the highest as max
  var allHPs = targets.map(function(obj){return obj.currentHP})
  var max = Math.max.apply(Math, allHPs);
  //for an n number of times, remove the highest HP to find the next highest
  //i starting at 1 makes it so if you're looking for the higest HP, it skips this loop
  for(var i=1;i<n;i++){
    allHPs[allHPs.indexOf(max)] = "";
    max = Math.max.apply(Math, allHPs);
  }

  //return an array with all targets whose currentHP is equal to the nth max
  return targets.filter(function(target){return target.currentHP == max});
}

//find the objects with the lowest currentHP
function findNthLowestHP(targets, n=1){
  //put the HPs of all targets in an array, then set the lowest as min
  var allHPs = targets.map(function(obj){return obj.currentHP})
  var min = Math.min.apply(Math, allHPs);
  //for an n number of times, remove the lowest HP to find the next lowest
  //i starting at 1 makes it so if you're looking for the lowest HP, it skips this loop
  for(var i=1;i<n;i++){
    allHPs[allHPs.indexOf(min)] = Infinity;
    min = Math.min.apply(Math, allHPs);
  }

  //return an array with all targets whose currentHP is equal to the nth min
  return targets.filter(function(target){return target.currentHP == min});
}
