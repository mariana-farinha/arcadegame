frontend-nanodegree-arcade-game
===============================

##Arcade Game

This is a simple working example of Frogs.

###Build process 

####Changes were done to app.js.

#####The logical steps were:

1. Create an Enemy Object with the following components:
x -> value of the x coordinate
y-> value of the y coordinate
sprite-> enemy image file
speed-> speed of the enemy
update -> function responsable for updating the x position of the enemy and modifying the enemy once it reaches the end of the platform
render -> function that displays the image of the enemy

1. Create Player Object with the following components:
x-> value of the x coordinate
y-> value of the y coordinate
sprite-> player image file
update-> function that checks if the position of the player needs to be restarted due to its proximity to an eneymy instance
render-> function that displays the player on the screen
handleInput-> function that commands the player to act according to the keyboard input that fired the event listener and respecting the platform boundaries

#####Remarks
The game has a total of 3 enemy instances.
The goal of this game is stay in play for as long as possible.
Everytime an enemy reaches the end of the platform it appears on the other side with a new random speed and y position. 
