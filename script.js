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
    if (!songstart.isPlaying()) { 
      songstart.loop();
    }
    if (mouseButton == RIGHT) {
      state = 1
    songstart.stop();
    }
  }
  
  if (state == 3) {
    background(0)
    fill(255, 0, 0)
    text('SEE YOU NEXT TIME!', 30, 200)
    songstart.stop();
    soundbye.play();
  }

  if (state == 4) {
    background(0)
    songstart.stop();
    drawWorld();
    food();
    textSize(30);
    fill(255);
    strokeWeight(8);
    stroke(0);
    text(score, 10, 30);
    var textMap = [
['0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0'],
['0 + - - - - + - - - - - + 0 + - - - - - + - - - - + 0'],
['0 | 0 0 0 0 | 0 0 0 0 0 | 0 | 0 0 0 0 0 | 0 0 0 0 | 0'],
['0 | 0 0 0 0 | 0 0 0 0 0 | 0 | 0 0 0 0 0 | 0 0 0 0 | 0'],
['0 | 0 0 0 0 | 0 0 0 0 0 | 0 | 0 0 0 0 0 | 0 0 0 0 | 0'],
['0 + - - - - + - - + - - + - + - - + - - + - - - - + 0'],
['0 | 0 0 0 0 | 0 0 | 0 0 0 0 0 0 0 | 0 0 | 0 0 0 0 | 0'],
['0 | 0 0 0 0 | 0 0 | 0 0 0 0 0 0 0 | 0 0 | 0 0 0 0 | 0'],
['0 + - - - - + 0 0 + - - + 0 + - - + 0 0 + - - - - + 0'],
['0 0 0 0 0 0 | 0 0 0 0 0 | 0 | 0 0 0 0 0 | 0 0 0 0 0 0'],
['0 0 0 0 0 0 | 0 0 0 0 0 | 0 | 0 0 0 0 0 | 0 0 0 0 0 0'],
['0 0 0 0 0 0 | 0 0 + - - + - + - - + 0 0 | 0 0 0 0 0 0'],
['0 0 0 0 0 0 | 0 0 | 0 0 0 1 0 0 0 | 0 0 | 0 0 0 0 0 0'],
['0 0 0 0 0 0 | 0 0 | 0 0 1 1 1 0 0 | 0 0 | 0 0 0 0 0 0'],
['+ - - - - - + - - + 0 0 1 1 1 0 0 + - - + - - - - - +'],
['0 0 0 0 0 0 | 0 0 | 0 0 0 0 0 0 0 | 0 0 | 0 0 0 0 0 0'],
['0 0 0 0 0 0 | 0 0 + - - - - - - - + 0 0 | 0 0 0 0 0 0'],
['0 0 0 0 0 0 | 0 0 | 0 0 0 0 0 0 0 | 0 0 | 0 0 0 0 0 0'],
['0 0 0 0 0 0 | 0 0 | 0 0 0 0 0 0 0 | 0 0 | 0 0 0 0 0 0'],
['0 + - - - - + - - + - - + 0 + - - + - - + - - - - + 0'],
['0 | 0 0 0 0 | 0 0 0 0 0 | 0 | 0 0 0 0 0 | 0 0 0 0 | 0'],
['0 | 0 0 0 0 | 0 0 0 0 0 | 0 | 0 0 0 0 0 | 0 0 0 0 | 0'],
['0 + - + 0 0 + - - + - - + - + - - + - - + 0 0 + - + 0'],
['0 0 0 | 0 0 | 0 0 | 0 0 0 0 0 0 0 | 0 0 | 0 0 | 0 0 0'],
['0 0 0 | 0 0 | 0 0 | 0 0 0 0 0 0 0 | 0 0 | 0 0 | 0 0 0'],
['0 + - + - - + 0 0 + - - + 0 + - - + 0 0 + - - + - + 0'],
['0 | 0 0 0 0 0 0 0 0 0 0 | 0 | 0 0 0 0 0 0 0 0 0 0 | 0'],
['0 | 0 0 0 0 0 0 0 0 0 0 | 0 | 0 0 0 0 0 0 0 0 0 0 | 0'],
['0 + - - - - - - - - - - + - + - - - - - - - - - - + 0'],
['0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0']
];


var world = [];

    for(var i= 0; i < textMap.length; i++) {
        for(var j = 0; j < textMap[j].length; j++) {
            world.push(textMap[i][j].split(" "));
        }
    }

function drawWorld() {
    for(var y = 0; y < world.length; y++) {
        for(var x = 0; x < world[y].length; x++) {
            switch(world[y][x]) {
                case '0':
                    fill(22, 22, 250);
                    strokeWeight(2);
                    stroke(0);
                    rect(x*cell, y*cell, cell, cell);
                    break;
                case '1':
                    fill(0);
                    rect(x*cell, y*cell, cell, cell);
                    break;                
                default:
            }
        }
    }
}
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