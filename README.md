# GA Project-1 Space Invaders

## Overview 
First front-end development project for the Software Engineering Immersive course using pure vanilla Javascript, HTML and CSS


## Technologies used:
* HTML5
* CSS3
* JavaScript


## Brief:
Space Invaders is a classic arcade game from the 80s. The player aims to shoot an invading alien armada, before it reaches the planet's surface using a mounted gun turret.

The player can only move left or right. The aliens also move from left to right, and also down each time the reach the side of the screen. The aliens also periodically drop bombs towards the player.

Once the player has destroyed a wave of aliens, the game starts again. The aim is to achieve the highest score possible before either being destroyed by the aliens, or allowing them to reach the planet's surface.

* The player should be able to clear at least one wave of aliens
* The player's score should be displayed at the end of the game

  ![Screenshot](/assets/screenshot.png)


## Approach:
* Created grid by starting with an empty array of 'cells'
- then after setting a width and height using a for- loop to create a div element inside each cell then appending each cell into the array of 'cells'
* Spacehip was added to one of the cells
* Separate array was created for all aliens and again using for loops was added to each designated cell with index in the array
* Moving aliens- was done by setInterval so that the index of the aliens in the array would increase/ decrease by one
- when the invaders hit either wall the direction would change
* Moving the spaceship was done in a similar way but would be triggered by the arrow key and not moving at set intervals

* Shooting lasers- if the key 'W' was pressed the ship would fire lasers. This was done by adding a laser image to the cell above the position of the spaceship.
- another set interval was placed here so that the laser would move upwards 
- if the index of the laser and an alien equaled the same, the alien would be 'killed' - by removing them from the aliens array and pushing them to an empty 'dead aliens' array 
* When the invaders hit the bottom of the grid then the game is over 

* Dropping bombs- 

* If the spaceship managed to remove all aliens on the screen before they hit the bottom then they would move on to level 2.

* Level 2 was created in a very similar way for creating the grid, adding aliens and spaceship and shooting lasers
- for this level instead of adding individual small aliens I made it so that it would be a large image of the original space invader alien. 

* Using local storage to display player's score 

* Start button starts the intervals of the bombs and aliens and also the event listener to shoot laser 


## Challenges/ known bugs:
- Clearing grid when moving onto level 2
- Getting bombs to be removed as shows errors in console once they are at bottom of grid
- Getting aliens to change direction when they hit the side walls (atm is when the original most lateral alien hits even when they are removed)
- Sometimes there is a lag when the alien is hit so that the score adds up more slowly and even when all the aliens are removed from the grid it doesn't immediately come up with the next screen 


## Future improvements:
- Having a 'start again' button when the player dies
- Add lives so that the player has more than one chance to complete the game

## Lessons learned:
