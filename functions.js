/*
* 
* functions that the game uses for playing
* 
*/

//reduce a target's currentHP
function damageHP(instigator, target, amount){
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
  //move card from hand to play area
  currentPlayer.playArea.push(currentPlayer.hand.splice(playedCard, 1));
  //do its effect
  playedCard.effect();
  //if it was a one-shot, move it to the trash
  if(playedCard.cardType === "oneshot"){
    currentPlayer.trash.push(currentPlayer.playArea.splice(playedCard,1));
  }
}

//move a target from the play area to the trash
function destroyCard(owningPlayer, targetCard){
  owningPlayer.trash.push(owningPlayer.playArea.splice(targetCard));
}

//find the objects with the highest currentHP
function findHighestHP(targets, n){
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
function findLowestHP(targets, n){
  debugger;
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


/*
* 
* functions for html visualization
* 
*/

function createTarget(target, location){
  var newTarget = document.createElement("DIV");
  
  //add card types to the target DIV's class list
  target.cardType.forEach(function(type){
    newTarget.classList.add(type);
  });
  
  newTarget.innerHTML = `${target.cardName}<br>${target.currentHP}`;
  var playArea = document.getElementByID(location);
  
  
}
