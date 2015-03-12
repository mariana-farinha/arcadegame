// Enemies our player must avoid
var Enemy = function(speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = 0;
    this.y = 60 + (Math.floor((Math.random() * 3) + 1) - 1)*85;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if(this.x >= 505){
        //everytime the enemy goes off screen 
        //it appears on the other end with a different speed
        this.x = 0;
        this.speed = Math.floor((Math.random() * 200) + 70);
        this.y = 60 + (Math.floor((Math.random() * 3) + 1) - 1)*85;

    } else {
        this.x = this.x + this.speed * dt;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.x = 202;
    this.y = 400;
    this.sprite = 'images/char-boy.png';

};

//checks if there are any collisions 
Player.prototype.update = function() {
    for(var i = 0; i< allEnemies.length; i++){
        if(Math.abs(this.x - allEnemies[i].x) <= 50 && Math.abs(this.y - allEnemies[i].y) <= 50){
            this.x = 202;
            this.y = 400;

        }
    }
};

//renders the images 
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

//Receives the type of key pressed and acts accordingly
Player.prototype.handleInput = function(move) {
    switch(move){
        case "left":
        if(this.x !== 0){
        this.x = this.x - 101;
    }
        break;
        case "right":
        if(this.x != 404){
        this.x = this.x + 101;
    }
        break;
        case "up":
        if(this.y != 60){
        this.y = this.y - 85;
    }
        break;
        case "down":
        if(this.y != 400){
        this.y = this.y + 85;
    }
        break;


    }

};

// Now instantiate your objects.
var enemy1 = new Enemy(60);
var enemy2 = new Enemy(100);
var enemy3 = new Enemy(80);
// Place all enemy objects in an array called allEnemies
var allEnemies = [enemy1, enemy2, enemy3];
// Place the player object in a variable called player
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
