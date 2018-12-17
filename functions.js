//reduce a target's currentHP
function damageHP(target, amount){
  if(amount >= target.currentHP){
    target.currentHP = 0;
  } else {
    target.currentHP -= amount;
  }
  return target.currentHP;
}

//increase a target's currentHP
function healHP(target, amount){
  if(amount >= (target.MAXHP - target.currentHP)){
    target.currentHP = target.MAXHP;
  } else {
    target.currentHP += amount;
  }
  return target.currentHP;
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
function findHighestHP(targets, n){
  debugger;
  //put the HPs of all targets in an array, then set the highest as max
  var allHPs = targets.map(function(obj){return obj.currentHP})
  var max = Math.max(allHPs);
  //for an n number of times, remove the highest HP to find the next highest
  //i starting at 1 makes it so if you're looking for the higest HP, it skips this loop
  for(var i=1;i<n;i++){
    allHPs[allHPs.indexOf(max)] = "";
    max = Math.max(allHPs);
  }

  //return an array with all targets whose currentHP is equal to the highest HP
  return targets.filter(function(target){return target.currentHP == max});
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
