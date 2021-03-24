let state = 1
let circleX = 200
let circleY = 200
let left, right, up, down;
let img;
let song;


function preload(){
songstart = loadSound('Sounds/game_start.wav');
}

function setup() {
createCanvas(600, 400);
imgpacman = loadImage('Images/pacman_PNG87.png');
 
}
 

function draw() {
 print(state);

  if (state == 1){
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
    image(imgpacman, 300, 80, 250, 250)
    songstart.stop();
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
  }

    if (!songstart.isPlaying()) {
    songstart.play(); 
    songstart.loop();
     }
  

  if (state == 3) {
    background(0)
    fill(255, 0, 0)
    text('SEE YOU NEXT TIME!', 30, 200)
    songstart.stop();
  }

  if (state == 4) {
    background(0)
    fill(255, 0, 0)
    songstart.stop();
  }
}

function mouseClicked() {
  if (state == 1) {
    if (mouseX <= 300 && mouseX >= 100 && mouseY <= 160 && mouseY >= 85) {
      state = 2
      
      
    }

     if (mouseX <= 300 && mouseX >= 100 && mouseY <= 310 && mouseY >= 235) {
      state = 3
      noLoop()
      
    }
  }
  else if (state == 2) {
    if (mouseX <= 200 && mouseX >= 100 && mouseY <= 170 && mouseY >= 70) {
      state = 4
      noLoop()
    }
  } 
}