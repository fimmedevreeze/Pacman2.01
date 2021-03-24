let state = 1
let circleX = 200
let circleY = 200
let left, right, up, down;
let img;
let song;


function preload(){
song1 = loadSound('Sounds/game_start.wav');
}

function setup() {
createCanvas(600, 400);
img = loadImage('Images/pacman_PNG87.png');
 if (!song1.isPlaying()) {
    song1.play(); 
    song1.loop();
     }

}
 

function draw() {
 print(state);
  background('black');
  rectMode(CENTER);
  fill('yellow');
  rect(150, 120, 200, 75, 20);
  fill('yellow');
  rect(150, 270, 200, 75, 20);
  textSize(50);
  fill(0);
  text('START', 75, 135);
  text('EXIT', 100, 285);
  image(img, 300, 80, 250, 250)

 
    

  left = false
  right = false
  up = false
  down = false

  if (state == 2 && circleX > 25 && circleY > 25) {
  if (left == true) 
    circleX--
  if (right == true)
    circleX++
  if(up == true)
    circleY-=1
  if (down == true)
    circleY++
  }
  
  if (state == 2) {
    background('black');
    fill('yellow')
    text('LEVELS', 57, 60)
    fill('yellow');
    rect(150, 120, 200, 75, 20);
    fill('black')
    text('level 1', 75, 137)
    fill('yellow');
    rect(150, 220, 200, 75, 20);
    fill('black')
    text('level 2', 75, 237)
    fill('yellow');
    rect(150, 320, 200, 75, 20);
    fill('black')
    text('level 3', 75, 337)
    if (mouseButton == RIGHT) {
      state = 1
    }
  }

  if (state == 3) {
    background(0)
    fill(255, 0, 0)
    text('BYE THEN OK', 30, 200)
  }
}

function mouseClicked() {
  if (state == 1) {
    if (mouseX <= 300 && mouseX >= 100 && mouseY <= 160 && mouseY >= 85) {
      state = 2
      song1.stop()
      
    }
  }
  if (state == 1) {
    if (mouseX <= 300 && mouseX >= 100 && mouseY <= 310 && mouseY >= 235) {
      state = 3
      noLoop()
      song1.stop()

    }
  }
}

function keyPressed() {
  if (state == 2) {
    if (keyCode === LEFT_ARROW) {
      left = true
      circleX--
    }
    if (keyCode === RIGHT_ARROW) {
      right = true
      circleX++
    }
    if (keyCode === UP_ARROW) {
      up = true
      circleY--
    }
    if (keyCode === DOWN_ARROW) {
      down = true
      circleY++
    }
  }
}

function keyReleased() {
    if (state == 2) {
    if (keyCode === LEFT_ARROW) {
      left = false
    }
    if (keyCode === RIGHT_ARROW) {
      right = false
      circleX++
    }
    if (keyCode === UP_ARROW) {
      up = false
      circleY--
    }
    if (keyCode === DOWN_ARROW) {
      down = false
      circleY++
    }
  }
}
