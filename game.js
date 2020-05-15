
/*
  Code modified from:
  http://www.lostdecadegames.com/how-to-make-a-simple-html5-canvas-game/
  using graphics purchased from vectorstock.com
*/

/* Initialization.
Here, we create and add our "canvas" to the page.
We also load all of our images. 
*/


let canvas;
let ctx;
let score = 0;
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
let leaderboard = []
let player = document.getElementById("userName").value
leaderboard.push(player);
let bgReady, heroReady, monsterReady,monster2Ready,SanderReady,BidenReady;
let bgImage, heroImage, monsterImage,monster2Image,SanderImage,BidenImage;

let startTime = Date.now();
const SECONDS_PER_ROUND = 30;
let elapsedTime = 0;

function loadImages() {
  bgImage = new Image();
  bgImage.onload = function () {
    // show the background image
    bgReady = true;
  };
  bgImage.src = "images/background.png";
  heroImage = new Image();
  heroImage.onload = function () {
    // show the hero image
    heroReady = true;
  };
  heroImage.src = "images/hero.png";

  monsterImage = new Image();
  monsterImage.onload = function () {
    // show the monster image
    monsterReady = true;
  };
  monsterImage.src = "images/monster.png";
  
  monster2Image = new Image();
  monster2Image.onload = function () {
    // show the monster image
    monster2Ready = true;
  };
  monster2Image.src = "images/Democrats.png";
  SanderImage = new Image();
  SanderImage.onload = function () {
    // show the monster image
    SanderReady = true;
  };
  SanderImage.src = "images/Sander.png";
  BidenImage = new Image();
  BidenImage.onload = function () {
    // show the monster image
    BidenReady = true;
  };
  BidenImage.src = "images/Biden.png";
}

/** 
 * Setting up our characters.
 * 
 * Note that heroX represents the X position of our hero.
 * heroY represents the Y position.
 * We'll need these values to know where to "draw" the hero.
 * 
 * The same applies to the monster.
 */

let heroX = canvas.width / 2;
let heroY = canvas.height / 2;

let monsterX = 32 + (Math.random() * (canvas.width - 64)); let monster2X = 32 + (Math.random() * (canvas.width - 64));let SanderX = 32 + (Math.random() * (canvas.width - 64));let BidenX = 32 + (Math.random() * (canvas.width - 64));
let monsterY = 32 + (Math.random() * (canvas.width - 64)); let monster2Y = 32 + (Math.random() * (canvas.width - 64));let SanderY = 32 + (Math.random() * (canvas.width - 64));let BidenY = 32 + (Math.random() * (canvas.width - 64));

/** 
 * Keyboard Listeners
 * You can safely ignore this part, for now. 
 * 
 * This is just to let JavaScript know when the user has pressed a key.
*/
let keysDown = {};
function setupKeyboardListeners() {
  // Check for keys pressed where key represents the keycode captured
  // For now, do not worry too much about what's happening here. 
  addEventListener("keydown", function (key) {
    keysDown[key.keyCode] = true;
  }, false);

  addEventListener("keyup", function (key) {
    delete keysDown[key.keyCode];
  }, false);
}


/**
 *  Update game objects - change player position based on key pressed
 *  and check to see if the monster has been caught!
 *  
 *  If you change the value of 5, the player will move at a different rate.
 */
let update = function () {
  // Update the time.
  elapsedTime = Math.floor((Date.now() - startTime) / 1000);


  if (38 in keysDown) { // Player is holding up key
    heroY -= 5;
  }
  if (40 in keysDown) { // Player is holding down key
    heroY += 5;
  }
  if (37 in keysDown) { // Player is holding left key
    heroX -= 5;
  }
  if (39 in keysDown) { // Player is holding right key
    heroX += 5;
  }

  // Check if player and monster collided. Our images
  // are about 32 pixels big.
  if (
    heroX <= (monsterX + 32)
    && monsterX <= (heroX + 32)
    && heroY <= (monsterY + 32)
    && monsterY <= (heroY + 32)
  ) {
    // Pick a new location for the monster.
    // Note: Change this to place the monster at a new, random location.
    score ++;
    document.getElementById("terms").innerHTML = score;
    monsterX = 32 + (Math.random() * (canvas.width - 64));
    monsterY = 32 + (Math.random() * (canvas.height - 64));
    reset();
  }
  if (
    heroX <= (monster2X + 32)
    && monster2X <= (heroX + 32)
    && heroY <= (monster2Y + 32)
    && monster2Y <= (heroY + 32)
  ) {
    // Pick a new location for the monster.
    // Note: Change this to place the monster at a new, random location.
    monster2X = 32 + (Math.random() * (canvas.width - 64));
    monster2Y = 32 + (Math.random() * (canvas.height - 64));
    alert("You Failed!The democrats got evidence to impeach Trump!");
    reset();
  }
  if (
    heroX <= (SanderX + 32)
    && SanderX <= (heroX + 32)
    && heroY <= (SanderY + 32)
    && SanderY <= (heroY + 32)
  ) {
    // Pick a new location for the monster.
    // Note: Change this to place the monster at a new, random location.
    SanderX = 32 + (Math.random() * (canvas.width - 64));
    SanderY = 32 + (Math.random() * (canvas.height - 64));
    alert("You Failed!The democrats got evidence to impeach Trump!");
    reset();
  }
  if (
    heroX <= (BidenX + 32)
    && BidenX <= (heroX + 32)
    && heroY <= (BidenY + 32)
    && BidenY <= (heroY + 32)
  ) {
    // Pick a new location for the monster.
    // Note: Change this to place the monster at a new, random location.
    BidenX = 32 + (Math.random() * (canvas.width - 64));
    BidenY = 32 + (Math.random() * (canvas.height - 64));
    alert("You Failed!The democrats got evidence to impeach Trump!");
    reset();
  }
};

/**
 * This function, render, runs as often as possible.
 */
var render = function () {
  if (bgReady) {
    ctx.drawImage(bgImage, 0, 0);
  }
  if (heroReady) {
    ctx.drawImage(heroImage, heroX, heroY);
  }
  if (monsterReady) {
    ctx.drawImage(monsterImage, monsterX, monsterY);
  }
  if (monster2Ready) {
    ctx.drawImage(monster2Image, monster2X, monster2Y);
  }
  if (SanderReady) {
    ctx.drawImage(SanderImage, SanderX, SanderY);
  }
  if (BidenReady) {
    ctx.drawImage(BidenImage, BidenX, BidenY);
  }
    
  time =SECONDS_PER_ROUND - elapsedTime
  
  document.getElementById("time").innerHTML = time;
  if(time == 0 ){
    alert("Trump is dead of old age")
    reset();
  }
 
};
/**
 * Reset function:
 * Reset everything
 */
let reset = function(){
  time2 = time;
  document.getElementById("time").innerHTML = time2;
  heroX = canvas.width/2;
  heroY = canvas.height/2;
  score = 0
  document.getElementById("terms").innerHTML = score;
  document.getElementById("time").innerHTML = time;
  monsterX = 32 + (Math.random() * (canvas.width - 64));  monster2X = 32 + (Math.random() * (canvas.width - 64)); SanderX = 32 + (Math.random() * (canvas.width - 64)); BidenX = 32 + (Math.random() * (canvas.width - 64));
  monsterY = 32 + (Math.random() * (canvas.width - 64));  monster2Y = 32 + (Math.random() * (canvas.width - 64)); SanderY = 32 + (Math.random() * (canvas.width - 64)); BidenY = 32 + (Math.random() * (canvas.width - 64));
  BidenX = 32 + (Math.random() * (canvas.width - 64));
  BidenY = 32 + (Math.random() * (canvas.height - 64));
  SanderX = 32 + (Math.random() * (canvas.width - 64));
  SanderY = 32 + (Math.random() * (canvas.height - 64));
  monster2X = 32 + (Math.random() * (canvas.width - 64));
  monster2Y = 32 + (Math.random() * (canvas.height - 64));
  update();
  render();
}
/**
 * The main game loop. Most every game will have two distinct parts:
 * update (updates the state of the game, in this case our hero and monster)
 * render (based on the state of our game, draw the right things)
 */

 var main = function () {
  update(); 
  render();
  // Request to do this again ASAP. This is a special method
  // for web browsers. 
  requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame.
// Safely ignore this line. It's mostly here for people with old web browsers.
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
document.getElementById("")
// Let's play this game!
loadImages();
setupKeyboardListeners();
main();

document.getElementById("resetButton").addEventListener("click",reset)