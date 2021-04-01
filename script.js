let state = 1
let circleX = 200
let circleY = 200
let left, right, up, down;
let img;
let song;


function preload(){
songstart = loadSound('Sounds/game_start.wav');
soundbye = loadSound('Sounds/game_end.wav');
soundclick = loadSound('Sounds/credit.wav');
wall = loadImage("Images/maartenslogo.png")
}

function setup() {
createCanvas(800, 529);
imgpacman = loadImage('Images/pacman_PNG87.png');
}
 




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
    text('LEVELS', 308, 70)
    fill('yellow');
    rect(400, 160, 200, 75, 20);
    fill('black')
    text('level 1', 325, 177)
    fill('yellow');
    rect(400, 270, 200, 75, 20);
    fill('black')
    text('level 2', 325, 287)
    fill('yellow');
    rect(400, 380, 200, 75, 20);
    fill('black')
    text('level 3', 325, 397)
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
    text('SEE YOU NEXT TIME!', 140, 250)
    songstart.stop();
    soundbye.play();
    keyPressed();
  }

  if (state == 4) {
    background('black')
    songstart.stop();
    drawWorld();
   
	  }

  if (state == 5) {
    background('black')
    songstart.stop();
    drawWorld();
    //drawGhost();
    
    
	  }

  if (state == 6) {
    background('black')
    songstart.stop();
    drawWorld();
   // pacman();
   
	  }
}

function mouseClicked() {
  if (state == 1) {
    if (mouseX <= 350 && mouseX >= 150 && mouseY <= 235 && mouseY >= 160) {
      soundclick.play();
      state = 2
     
      
    }

     if (mouseX <= 350 && mouseX >= 150 && mouseY <= 385 && mouseY >= 310) {
      soundclick.play();
      state = 3
      noLoop()
      
    }
  }
  else if (state == 2) {
    if (mouseX <= 500 && mouseX >= 300 && mouseY <= 195 && mouseY >= 120) {
      soundclick.play();
      state = 4
    }
    if (mouseX <= 500 && mouseX >= 300 && mouseY <= 305 && mouseY >= 230) {
      soundclick.play();
      state = 5
    }
    if (mouseX <= 500 && mouseX >= 300 && mouseY <= 415 && mouseY >= 340) {
      soundclick.play();
      state = 6
    }
  } 
}



var level = [ 
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
  [1,2,2,1,2,1,2,2,2,1,1,1,1,1,2,2,2,2,1,1,1,1,1,2,2,2,1,2,1,2,2,1],
  [1,1,2,1,1,2,2,1,2,1,2,2,2,1,1,1,1,1,1,2,2,2,1,2,1,2,2,1,1,2,1,1],
  [1,1,2,2,2,2,1,2,2,1,1,1,2,2,2,2,2,2,2,2,1,1,1,2,2,1,2,2,2,2,1,1],
  [1,1,2,1,1,2,2,1,2,2,2,2,2,2,1,2,2,1,2,2,2,2,2,2,1,2,2,1,1,2,1,1],
  [1,2,2,1,2,1,2,2,1,1,1,2,1,1,1,2,2,1,1,1,2,1,1,1,2,2,1,2,1,2,2,1],
  [1,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,1],
  [1,1,1,1,1,1,2,1,2,1,0,0,1,1,1,0,0,1,1,1,0,0,1,2,1,2,1,1,1,1,1,1],
  [0,0,0,0,0,1,2,1,2,1,0,0,1,3,4,5,5,4,3,1,0,0,1,2,1,2,1,0,0,0,0,0],
  [1,1,1,1,1,1,2,1,2,1,0,0,1,1,1,1,1,1,1,1,0,0,1,2,1,2,1,1,1,1,1,1],
  [1,2,2,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,2,2,1],
  [1,2,2,1,2,1,2,2,1,1,1,2,1,1,1,2,2,1,1,1,2,1,1,1,2,2,1,2,1,2,2,1],
  [1,1,2,1,1,2,2,1,2,2,2,2,2,2,1,2,2,1,2,2,2,2,2,2,1,2,2,1,1,2,1,1],
  [1,1,2,2,2,2,1,2,2,1,1,1,2,2,2,2,2,2,2,2,1,1,1,2,2,1,2,2,2,2,1,1],
  [1,1,2,1,1,2,2,1,2,1,2,2,2,1,1,1,1,1,1,2,2,2,1,2,1,2,2,1,1,2,1,1],
  [1,2,2,1,2,1,2,2,2,1,1,1,1,1,2,2,6,2,1,1,1,1,1,2,2,2,1,2,1,2,2,1],
  [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  
];

var pacman = {
  x: 16,
  y: 16 ,
}

var score = 0;

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
          else if(level[y][x] == 3){
               
                fill('blue')
                ellipse(x * 25 +14 , y * 26 +14 , 20, 20);
                

          }        
          else if(level[y][x] == 4){
               
                fill('orange')
                ellipse(x * 25 +14 , y * 26 +14 , 20, 20);
                

          }        

          else if(level[y][x] == 5){
               
                fill('red')
                ellipse(x * 25 +14 , y * 26 +14 , 20, 20);
                

          }        
          else if(level[y][x] == 6){
              drawPacman();
           
               

          }            

          }   
     }
   noStroke();
   fill(255);
   textSize(30);
   textAlign(LEFT);
   text(score, 5, height - 5);
  }

function drawPacman(){
  for(var y = 0; y < 19 ; y++){    
      for(var x = 0; x < 32; x++){          
         if (level[y][x] == 6){
         fill('yellow');
         ellipse(x * 25 +14 , y * 26 +14, 20, 20);
      } 
    
  }
}
}




function keyPressed() {
  	switch(keyCode) {
		case 37:
    case 65:
      if (level[pacman.y][pacman.x-1] !== 1){
        if (level[pacman.y][pacman.x-1] === 2) {
         score = score + 10;
        }
      level[pacman.y][pacman.x] = 0;
      pacman.x = pacman.x - 1;
      level[pacman.y][pacman.x] = 6;
      drawWorld();
      }
			break;
		case 39:
    case 68:		
    if (level[pacman.y][pacman.x+1] !== 1){
      if (level[pacman.y][pacman.x+1] === 2) {
         score = score + 10;
        }
		  level[pacman.y][pacman.x] = 0;
      pacman.x = pacman.x + 1;
      level[pacman.y][pacman.x] = 6;
      drawWorld();
      }
			break;
		case 38:
    case 87:		
    if (level[pacman.y-1][pacman.x] !== 1){
      if (level[pacman.y-1][pacman.x] === 2) {
         score = score + 10;
        }
		  level[pacman.y][pacman.x] = 0;
      pacman.y = pacman.y - 1;
       level[pacman.y][pacman.x] = 6;
      drawWorld();
      } 
			break;
		case 40:
    case 83:		
    if (level[pacman.y+1][pacman.x] !== 1){
      if (level[pacman.y+1][pacman.x-1] === 2) {
         score = score + 10;
        }
			level[pacman.y][pacman.x] = 0;
      pacman.y = pacman.y + 1;
      level[pacman.y][pacman.x] = 6;
      drawWorld();
      }
			break;
    	}
	}
 

function drawGhost(){
  fill('blue')
  ellipse(x, height/2, 20, 20);
  x = x + speed;
  
  if(x > width - 10 || x < 10){
   speed = -speed;
}
}

