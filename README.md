frontend-nanodegree-arcade-game
===============================

##Arcade Game

This is a simple working example of Frogs.

###Build process 

####Changes were done to app.js.

#####The logical steps were:

####Create an Enemy Object with the following components:
- __x -__ value of the x coordinate

- __y-__ value of the y coordinate

- __sprite-__ enemy image file

- __speed-__ speed of the enemy

- __update -__ function responsable for updating the x position of the enemy and modifying the enemy once it reaches the end of the platform

- __render -__ function that displays the image of the enemy

####Create Player Object with the following components:

- __x-__ value of the x coordinate

- __y-__ value of the y coordinate

- __sprite-__ player image file

- __update-__ function that checks if the position of the player needs to be restarted due to its proximity to an eneymy instance

- __render-__ function that displays the player on the screen

- __handleInput-__ function that commands the player to act according to the keyboard input that fired the event listener and respecting the platform boundaries

#####Remarks
The game has a total of 3 enemy instances.
The goal of this game is stay in play for as long as possible.
Everytime an enemy reaches the end of the platform it appears on the other side with a new random speed and y position. 
