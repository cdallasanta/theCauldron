### current tasks
v 0.4 - damage modification and HP visualization
-modify damage before it is applied
  -incoming and outgoing damage keys for each target object?
-current health shown in HTML
-character cards visualized

## long term goals:<br>
phases of a turn<br>
html changes to match current player<br>
switch to C#, since that's going to be better in the long run probably<br>
ongoings and equipment effects<br>
alter damage before it is applied<br>
event listeners?<br>
visualize it all<br>


### version history

v 0.3 - targets, persistence, and rearrange, complete<br>
-can add persistent targets to play area<br>
-equipments and ongoings stay in play area after being played<br>
-move hero info and functions to other files<br>

v 0.2 - powers and restructure to classes, complete<br>
-each active hero's information should be stored as a class instead of an object<br>
-characters should have an area that denotes which cards are actively in their play area<br>
-each hero has their base power attached to their class<br>

v 0.1 - add a little functionality, complete<br>
-heros and villains have a trash area<br>
-cards are stored in the decks, and can move into the hands with drawCards()<br>
-cards can be played from the hands, and then move into the trash with playCard()<br>
-cards can increase or decrease health<br>

v 0.0 - set the framework, complete<br>
-a way to store info about each hero and villain<br>
-info that can be stored is: max hp, current hp, name, deck, and hand<br>
-HP can be increased and decreased with a function<br>


