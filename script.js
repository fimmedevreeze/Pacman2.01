let state = 1
let circleX = 200
let circleY = 200
let left, right, up, down;
let img;
let song;


function preload(){
songstart = loadSound('Sounds/game_start.wav');
soundbye = loadSound('Sounds/game_end.wav');
wall = loadImage("Images/maartenslogo.png")
}

function setup() {
createCanvas(800, 494);
imgpacman = loadImage('Images/pacman_PNG87.png');
}
 


var [xpos, ypos, xspeed, yspeed] = [225, 225, 0, 0];

function draw() {
 


  if (state == 1){
    background('black');
    rectMode(CENTER);
    fill('yellow');
    rect(400, 50, 500, 50, 20);
    fill('yellow');
    rect(250, 200, 200, 75, 20);
    fill('yellow');
    rect(250, 350, 200, 75, 20);
    textSize(50);
    fill(0);
    text('PACMAN', 296, 68);
    text('START', 175, 215);
    text('EXIT', 200, 365);
    image(imgpacman, 450, 150, 250, 250)
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
    background('black')
    songstart.stop();
    fill('yellow');
	  ellipse(xpos, ypos, 25, 26);
	  if(xpos >= 0 && xpos + 25 <= 850) xpos += xspeed;
   	if(ypos >= 0 && ypos + 26 <= 500) ypos += yspeed;
    drawWorld();
	  }

  if (state == 5) {
    background('black')
    songstart.stop();
    fill('red');
	  ellipse(xpos, ypos, 25, 26);
	  if(xpos >= 0 && xpos + 25 <= 850) xpos += xspeed;
   	if(ypos >= 0 && ypos + 26 <= 500) ypos += yspeed;
    drawWorld();
    drawGhost();
	  }

  if (state == 6) {
    background('black')
    songstart.stop();
    fill('blue');
	  ellipse(xpos, ypos, 25, 26);
	  if(xpos >= 0 && xpos + 25 <= 850) xpos += xspeed;
   	if(ypos >= 0 && ypos + 26 <= 500) ypos += yspeed;
    drawWorld();
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
    if (mouseX <= 200 && mouseX >= 100 && mouseY <= 160 && mouseY >= 80) {
      state = 4
    }
    if (mouseX <= 200 && mouseX >= 100 && mouseY <= 260 && mouseY >= 180) {
      state = 5
    }
    if (mouseX <= 200 && mouseX >= 100 && mouseY <= 360 && mouseY >= 280) {
      state = 6
    }
  } 
}



function keyPressed() {
	switch(keyCode) {
		case 37:
		case 65:
			xspeed = -4;
			break;
		case 39:
		case 68:
			xspeed = 4;
			break;
		case 38:
		case 87:
			yspeed = -4;
			break;
		case 40:
		case 83:
			yspeed = 4;
			break;
	}
}

function keyReleased() {
	switch(keyCode) {
		case 37:
		case 65:
			xspeed = 0;
			break;
		case 39:
		case 68:
			xspeed = 0;
			break;
		case 38:
		case 87:
			yspeed = 0;
			break;
		case 40:
		case 83:
			yspeed = 0;
			break;
	}
}

var level = [ 
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
  [1,2,2,1,2,1,2,2,2,1,1,1,1,1,2,2,2,2,1,1,1,1,1,2,2,2,1,2,1,2,2,1],
  [1,1,2,1,1,2,2,1,2,1,2,2,2,1,1,1,1,1,1,2,2,2,1,2,1,2,2,1,1,2,1,1],
  [1,1,2,2,2,2,1,2,2,1,1,1,2,2,2,2,2,2,2,2,1,1,1,2,2,1,2,2,2,2,1,1],
  [1,1,2,1,1,2,2,1,2,2,2,2,2,2,1,2,2,1,2,2,2,2,2,2,1,2,2,1,1,2,1,1],
  [1,2,2,1,1,1,2,2,1,1,1,2,1,1,1,2,2,1,1,1,2,1,1,1,2,2,1,1,1,2,2,1],
  [1,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,1],
  [1,1,1,1,1,1,2,1,2,1,0,0,1,1,1,0,0,1,1,1,0,0,1,2,1,2,1,1,1,1,1,1],
  [0,0,0,0,0,1,2,1,2,1,0,0,1,0,0,0,0,0,0,1,0,0,1,2,1,2,1,0,0,0,0,0],
  [1,1,1,1,1,1,2,1,2,1,0,0,1,1,1,1,1,1,1,1,0,0,1,2,1,2,1,1,1,1,1,1],
  [1,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,1],
  [1,2,2,1,2,1,2,2,1,1,1,2,1,1,1,2,2,1,1,1,2,1,1,1,2,2,1,2,1,2,2,1],
  [1,1,2,1,1,2,2,1,2,2,2,2,2,2,1,2,2,1,2,2,2,2,2,2,1,2,2,1,1,2,1,1],
  [1,1,2,2,2,2,1,2,2,1,1,1,2,2,2,2,2,2,2,2,1,1,1,2,2,1,2,2,2,2,1,1],
  [1,1,2,1,1,2,2,1,2,1,2,2,2,1,1,1,1,1,1,2,2,2,1,2,1,2,2,1,1,2,1,1],
  [1,2,2,1,2,1,2,2,2,1,1,1,1,1,2,2,2,2,1,1,1,1,1,2,2,2,1,2,1,2,2,1],
  [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  
];

function drawWorld(){  
  for(var y = 0; y < 19 ; y++){    
      for(var x = 0; x < 32; x++){          
          if (level[y][x] == 0){
             
          fill(0);
          }
          else if(level[y][x] == 1){
               
                 image(wall, x * 25, y* 26, 25, 26); 
                
          }
          else if(level[y][x] == 2){
               
                fill(255);
                ellipseMode(CENTER);
                ellipse(x * 25 +14 , y * 26 +14 , 8, 8);
                
          }
                  
     }
  }
}
function drawFood() {
    
             
                noStroke();
                fill(0);
                rect(x * 25 + 15, y * 26 + 15, 25, 26);
                fill(255);
                ellipseMode(CENTER);
                ellipse(x * 25 + 15, y * 26 + 15, 8, 8);
            
        
  
}
function drawGhost(){
  fill('blue')
  ellipse(x, height/2, 20, 20);
  x = x + speed;
  
  if(x > width - 10 || x < 10){
    speed = -speed;
}
}