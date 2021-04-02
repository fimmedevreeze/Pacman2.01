let state = 1
let circleX = 200
let circleY = 200
let left, right, up, down;
let img;
let song;
const highScoreBoard = document.querySelector('.highScore');


function preload(){
songstart = loadSound('Sounds/game_start.wav');
soundbye = loadSound('Sounds/game_end.wav');
soundclick = loadSound('Sounds/credit.wav');
soundeat = loadSound('Sounds/eat_fruit.wav');
sounddeath = loadSound('Sounds/death_2.wav');
soundgameover = loadSound('Sounds/death_1.wav');
wall = loadImage("Images/maartenslogoo.png")
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
    text('Level 1', 325, 177)
    fill('yellow');
    rect(400, 270, 200, 75, 20);
    fill('black')
    text('Level 2', 325, 287)
    fill('yellow');
    rect(400, 380, 200, 75, 20);
    fill('black')
    text('ARCADE', 325, 397)
    songstart.stop();
    if (mouseButton == RIGHT) {
      state = 1
    }
  }
  
  if (state == 3) {
    background("black")
    fill(255, 0, 0)
    text('SEE YOU NEXT TIME!', 140, 250)
    songstart.stop();
    soundbye.play();
  }

  if (state == 4) {
    background('black')
    if (!songstart.isPlaying()) { 
      songstart.loop();
    }
    drawWorld();
    gameEnded();
    
    levelnumber = 1;
   
    ghostMove();
    ghost2Move();
    ghost3Move();

	  }

  if (state == 5) {
    background('black')
    if (!songstart.isPlaying()) { 
      songstart.loop();
    }
    drawWorld();
    gameEnded();
    levelnumber = 2;
    
    ghostMove();
    ghost2Move();
    ghost3Move();


    
	  }

  if (state == 6) {
    background('black')
    if (!songstart.isPlaying()) { 
      songstart.loop();
    }
    drawWorld();
    gameEndedarcade();
    levelnumber = "ARCADE";
    ghostMovearcade();
     ghost2Movearcade();
      ghost3Movearcade();
  }

  // if (state == 7) {
  //   songstart.stop();
  //   background('black');
  //   rectMode(CENTER);
  //   fill('yellow');
  //   rect(400, 50, 500, 50, 20);
  //   fill('yellow');
  //   rect(250, 350, 200, 75, 20);
  //   textSize(50);
  //   fill(0);
  //   text('EINDE SPEL', 296, 68);
  //   text('EXIT', 200, 365);
  //   image(imgpacman, 450, 150, 250, 250)
  // }

  if (state == 8) {
    songstart.stop();
    background('black');
    rectMode(CENTER);
    fill('yellow');
    rect(400, 50, 500, 50, 20);
    fill('yellow');
    rect(250, 350, 200, 75, 20);
    textSize(50);
    fill(0);
    text('GAME OVER', 296, 68);
    text('EXIT', 200, 365);
    image(imgpacman, 450, 150, 250, 250)
    drawHighscore();
  }
   
}

function mouseClicked() {
  if (state == 1) {
    if (mouseX <= 350 && mouseX >= 150 && mouseY <= 235 && mouseY >= 160) {
      soundclick.play();
      state = 2
     
      
    }

     else if (mouseX <= 350 && mouseX >= 150 && mouseY <= 385 && mouseY >= 310) {
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
  else if (state == 8) {
     if (mouseX <= 350 && mouseX >= 150 && mouseY <= 385 && mouseY >= 310) {
      soundclick.play();
      state = 2     
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
  [1,2,2,2,2,2,2,2,2,1,2,0,0,0,0,2,2,0,0,0,0,2,1,2,2,2,2,2,2,2,2,1],
  [1,1,1,1,1,1,2,1,2,1,2,0,1,1,1,2,2,1,1,1,0,2,1,2,1,2,1,1,1,1,1,1],
  [0,0,0,0,0,1,2,1,2,1,2,0,1,3,4,5,0,0,0,1,0,2,1,2,1,2,1,0,0,0,0,0],
  [1,1,1,1,1,1,2,1,2,1,2,0,1,1,1,1,1,1,1,1,0,2,1,2,1,2,1,1,1,1,1,1],
  [1,2,2,2,2,2,2,2,2,1,2,0,0,0,0,0,0,0,0,0,0,2,1,2,2,2,2,2,2,2,2,1],
  [1,2,2,1,2,1,2,2,1,1,1,2,1,1,1,2,2,1,1,1,2,1,1,1,2,2,1,2,1,2,2,1],
  [1,1,2,1,1,2,2,1,2,2,2,2,2,2,1,2,2,1,2,2,2,2,2,2,1,2,2,1,1,2,1,1],
  [1,1,2,2,2,2,1,2,2,1,1,1,2,2,2,2,2,2,2,2,1,1,1,2,2,1,2,2,2,2,1,1],
  [1,1,2,1,1,2,2,1,2,1,2,2,2,1,1,1,1,1,1,2,2,2,1,2,1,2,2,1,1,2,1,1],
  [1,2,2,1,2,1,2,2,2,1,1,1,1,1,2,2,6,2,1,1,1,1,1,2,2,2,1,2,1,2,2,1],
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
          else if(level[y][x] == 3){
               
                drawGhost1();
          }        
          else if(level[y][x] == 4){
               
                 drawGhost2();

          }        

          else if(level[y][x] == 5){
                    
                 drawGhost3();

          }        
          else if(level[y][x] == 6){
              drawPacman();
           
               

          }            

          }   
     }
   drawScore();
   drawHighscore();
   drawLives();
   levelNumber();
  }

var pacman = {
  x: 16,
  y: 16 ,
}



let score = 0;
var lives = 3;
var levelnumber;
let highscore = localStorage.getItem('game1HighScore') || 0;
 //highScoreBoard.textContent = 'HIGHSCORE: ' + highScore;


function drawScore(){
   noStroke();
   fill(255);
   textSize(30);
   textAlign(LEFT);
   text("Score" + " " + score, 5, height - 5);

}

function drawHighscore(){
   noStroke();
   fill(255);
   textSize(30);
   textAlign(LEFT);
   text("Highscore" + " " + highscore, 200, height - 5);
}

function checkHighScore(){
  if (score > localStorage.getItem()){
    localStorage.setItem('game1HighScore', score);
    highscore = score;
  }
}

function drawLives(){
   noStroke();
   fill(255);
   textSize(30);
   textAlign(left);
   text("Lives" + " " + lives, 700, height - 5);

}
function levelNumber(){
   noStroke();
   fill(255);
   textSize(30);
   textAlign(LEFT);
   text("Level" + " " + levelnumber , 500, height - 5);

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
 
function drawGhost1(){
 for(var y = 0; y < 19 ; y++){   
     for(var x = 0; x < 32; x++){         
        if (level[y][x] == 3){
        fill('blue')
               ellipse(x * 25 +14 , y * 26 +14 , 20, 20);
     }
  
 }
}
}
 
function drawGhost2(){
 for(var y = 0; y < 19 ; y++){   
     for(var x = 0; x < 32; x++){         
        if (level[y][x] == 4){
        fill('orange')
               ellipse(x * 25 +14 , y * 26 +14 , 20, 20);
     }
  
 }
}
}
 
function drawGhost3(){
 for(var y = 0; y < 19 ; y++){   
     for(var x = 0; x < 32; x++){         
        if (level[y][x] == 5){
       fill('red')
              ellipse(x * 25 +14 , y * 26 +14 , 20, 20);
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
        score = score + 5;
        soundeat.play();
        level[pacman.y][pacman.x] = 0;
        pacman.x = pacman.x - 1;
     level[pacman.y][pacman.x] = 6;
       }
       else if (level[pacman.y][pacman.x-1] === 3) {
        lives = lives - 1;
        sounddeath.play();
       pacman.x = pacman.x
       }
        else if (level[pacman.y][pacman.x-1] === 4) {
        lives = lives - 1;
        sounddeath.play();
        pacman.x = pacman.x
       }
        else if (level[pacman.y][pacman.x-1] === 5) {
        lives = lives - 1;
        sounddeath.play();
        pacman.x = pacman.x
       }
       else if (level[pacman.y][pacman.x-1] === 0) {
        level[pacman.y][pacman.x] = 0;
        pacman.x = pacman.x - 1;
     level[pacman.y][pacman.x] = 6;
       }
    
     drawWorld();
     }
      break;
    case 39:
   case 68:    
   if (level[pacman.y][pacman.x+1] !== 1){
     if (level[pacman.y][pacman.x+1] === 2) {
        score = score + 5;
        soundeat.play();
        level[pacman.y][pacman.x] = 0;
        pacman.x = pacman.x + 1;
     level[pacman.y][pacman.x] = 6;
       }
     else if (level[pacman.y][pacman.x+1] === 3) {
        lives = lives - 1;
        sounddeath.play();
        pacman.x = pacman.x
       } 
       else if (level[pacman.y][pacman.x+1] === 4) {
        lives = lives - 1;
        sounddeath.play();
         pacman.x = pacman.x
       } 
       else if (level[pacman.y][pacman.x+1] === 5) {
        lives = lives - 1;
        sounddeath.play();
        pacman.x = pacman.x
       } 
       else if (level[pacman.y][pacman.x+1] === 0) {
         level[pacman.y][pacman.x] = 0;
         pacman.x = pacman.x + 1;
     level[pacman.y][pacman.x] = 6;
       } 
 	
   
     drawWorld();
     }
      break;
    case 38:
   case 87:    
   if (level[pacman.y-1][pacman.x] !== 1){
     if (level[pacman.y-1][pacman.x] === 2) {
        score = score + 5;
        soundeat.play();
         level[pacman.y][pacman.x] = 0;
         pacman.y = pacman.y - 1;
      level[pacman.y][pacman.x] = 6;
       }
       else if (level[pacman.y-1][pacman.x] === 3) {
        lives = lives - 1;
        sounddeath.play();
        pacman.y = pacman.y
       }
       else if (level[pacman.y-1][pacman.x] === 4) {
        lives = lives - 1;
        sounddeath.play();
        pacman.y = pacman.y
       }
       else if (level[pacman.y-1][pacman.x] === 5) {
        lives = lives - 1;
        sounddeath.play();
        pacman.y = pacman.y
       }
       else if (level[pacman.y-1][pacman.x] === 0) {
         level[pacman.y][pacman.x] = 0;
         pacman.y = pacman.y - 1;
      level[pacman.y][pacman.x] = 6;
       }
    
     drawWorld();
     }
      break;
    case 40:
   case 83:    
   if (level[pacman.y+1][pacman.x] !== 1){
     if (level[pacman.y+1][pacman.x] === 2) {
        score = score + 5;
        soundeat.play();
         level[pacman.y][pacman.x] = 0;
         pacman.y = pacman.y + 1;
         level[pacman.y][pacman.x] = 6;
       
       }
        else if (level[pacman.y+1][pacman.x] === 3) {
        lives = lives - 1;
        sounddeath.play();
         pacman.y = pacman.y
         
       }
       else if (level[pacman.y+1][pacman.x] === 4) {
        lives = lives - 1;
        sounddeath.play();
         pacman.y = pacman.y
       
       }
       else if (level[pacman.y+1][pacman.x] === 5) {
        lives = lives - 1;
        sounddeath.play();
        pacman.y = pacman.y
         
       }
       else if (level[pacman.y+1][pacman.x] === 0) {
         level[pacman.y][pacman.x] = 0;
         pacman.y = pacman.y + 1;
         level[pacman.y][pacman.x] = 6;
       }
  
     }
    
      break;
     }
  }
 
function gameEnded(){
 if (score === 1405){
    state = 7;
  
 }
 else if (lives === 0){
   state = 8;
   soundgameover.play();
 }
}
function gameEndedarcade(){
 
  if (lives === 0){
   state = 8;
   soundgameover.play();
 }
}
 
var ghost = {
 x: 15,
 y:  7,
}
 
function ghostMove() {
 switch (getRndInteger()) {
   case 1:
     if (level[ghost.y][ghost.x-1] !== 1){
       if (level[ghost.y][ghost.x-1] === 2) {
        level[ghost.y][ghost.x] = 2;
        ghost.x = ghost.x - 1;
        level[ghost.y][ghost.x] = 3;
       }
       else if (level[ghost.y][ghost.x-1] === 0) {
        level[ghost.y][ghost.x] = 0;
        ghost.x = ghost.x - 1;
        level[ghost.y][ghost.x] = 3;
       }
       else if (level[ghost.y][ghost.x-1] === 6) {
        lives = lives - 1;
        sounddeath.play();
       ghost.x = ghost.x
       }
      drawWorld();
     }
     break;
   case 2:
   if (level[ghost.y][ghost.x+1] !== 1){
     if (level[ghost.y][ghost.x+1] === 2) {        
        level[ghost.y][ghost.x] = 2;
        ghost.x = ghost.x + 1;
        level[ghost.y][ghost.x] = 3;
       }
       else if (level[ghost.y][ghost.x+1] === 0) {
        level[ghost.y][ghost.x] = 0;
        ghost.x = ghost.x + 1;
        level[ghost.y][ghost.x] = 3;
       }  
       else if (level[ghost.y][ghost.x+1] === 6) {
        lives = lives - 1;
        sounddeath.play();
       ghost.x = ghost.x
       }
      drawWorld();
     }
     break;
   case 3:    
   if (level[ghost.y-1][ghost.x] !== 1){
     if (level[ghost.y-1][ghost.x] === 2) {  
       level[ghost.y][ghost.x] = 2;   
       ghost.y = ghost.y - 1;
       level[ghost.y][ghost.x] = 3;
       }
       else if (level[ghost.y-1][ghost.x] === 0) {
       level[ghost.y][ghost.x] = 0;
       ghost.y = ghost.y - 1;
       level[ghost.y][ghost.x] = 3;
       }
       else if (level[ghost.y-1][ghost.x] === 6) {
        lives = lives - 1;
        sounddeath.play();
       ghost.y = ghost.y
      }
      drawWorld();
     }
     break;
   case 4:
   if (level[ghost.y+1][ghost.x] !== 1){
     if (level[ghost.y+1][ghost.x] === 2) {
       level[ghost.y][ghost.x] = 2;     
       ghost.y = ghost.y + 1;
       level[ghost.y][ghost.x] = 3;
       }
       else if (level[ghost.y+1][ghost.x] === 0) {
       level[ghost.y][ghost.x] = 0;
       ghost.y = ghost.y + 1;
       level[ghost.y][ghost.x] = 3;
       }
       else if (level[ghost.y+1][ghost.x] === 6) {
        lives = lives - 1;
        sounddeath.play();
       ghost.y = ghost.y
      }
       drawWorld();
     }
     break;
     }
 }
 
var ghost2 ={
 x: 14,
 y:  7,
}
 
function ghost2Move() {
 switch (getRndInteger2()) {
   case 5:
     if (level[ghost2.y][ghost2.x-1] !== 1){
       if (level[ghost2.y][ghost2.x-1] === 2) {
        level[ghost2.y][ghost2.x] = 2;
        ghost2.x = ghost2.x - 1;
        level[ghost2.y][ghost2.x] = 4;
       }
       else if (level[ghost2.y][ghost2.x-1] === 0) {
        level[ghost2.y][ghost2.x] = 0;
        ghost2.x = ghost2.x - 1;
        level[ghost2.y][ghost2.x] = 4;
       }
       else if (level[ghost2.y][ghost2.x-1] === 6) {
        lives = lives - 1;
        sounddeath.play();
       ghost2.x = ghost2.x
       }
      drawWorld();
     }
     break;
   case 6:
   if (level[ghost2.y][ghost2.x+1] !== 1){
     if (level[ghost2.y][ghost2.x+1] === 2) {        
        level[ghost2.y][ghost2.x] = 2;
        ghost2.x = ghost2.x + 1;
        level[ghost2.y][ghost2.x] = 4;
       }
       else if (level[ghost2.y][ghost2.x+1] === 0) {
        level[ghost2.y][ghost2.x] = 0;
        ghost2.x = ghost2.x + 1;
        level[ghost2.y][ghost2.x] = 4;
       }  
       else if (level[ghost2.y][ghost2.x+1] === 6) {
        lives = lives - 1;
        sounddeath.play();
       ghost2.x = ghost2.x
       }
      drawWorld();
     }
     break;
   case 7:    
   if (level[ghost2.y-1][ghost2.x] !== 1){
     if (level[ghost2.y-1][ghost2.x] === 2) {  
       level[ghost2.y][ghost2.x] = 2;   
       ghost2.y = ghost2.y - 1;
       level[ghost2.y][ghost2.x] = 4;
       }
       else if (level[ghost2.y-1][ghost2.x] === 0) {
       level[ghost2.y][ghost2.x] = 0;
       ghost2.y = ghost2.y - 1;
       level[ghost2.y][ghost2.x] = 4;
       }
       else if (level[ghost2.y-1][ghost2.x] === 6) {
        lives = lives - 1;
        sounddeath.play();
       ghost2.y = ghost2.y
      }
      drawWorld();
     }
     break;
   case 8:
   if (level[ghost2.y+1][ghost2.x] !== 1){
     if (level[ghost2.y+1][ghost2.x] === 2) {
       level[ghost2.y][ghost2.x] = 2;     
       ghost2.y = ghost2.y + 1;
       level[ghost2.y][ghost2.x] = 4;
       }
       else if (level[ghost2.y+1][ghost2.x] === 0) {
       level[ghost2.y][ghost2.x] = 0;
       ghost2.y = ghost2.y + 1;
       level[ghost2.y][ghost2.x] = 4;
       }
       else if (level[ghost2.y+1][ghost2.x] === 6) {
        lives = lives - 1;
        sounddeath.play();
       ghost2.y = ghost2.y
      }
       drawWorld();
     }
     break;
     }
 }
 
var ghost3 ={
 x: 15,
 y:  7,
}
 
function ghost3Move() {
 switch (getRndInteger3()) {
   case 10:
     if (level[ghost3.y][ghost3.x-1] !== 1){
       if (level[ghost3.y][ghost3.x-1] === 2) {
        level[ghost3.y][ghost3.x] = 2;
        ghost3.x = ghost3.x - 1;
        level[ghost3.y][ghost3.x] = 5;
       }
       else if (level[ghost3.y][ghost3.x-1] === 0) {
        level[ghost3.y][ghost3.x] = 0;
        ghost3.x = ghost3.x - 1;
        level[ghost3.y][ghost3.x] = 5;
       }
       else if (level[ghost3.y][ghost3.x-1] === 6) {
        lives = lives - 1;
        sounddeath.play();
       ghost3.x = ghost3.x
       }
      drawWorld();
     }
     break;
   case 11:
   if (level[ghost3.y][ghost3.x+1] !== 1){
     if (level[ghost3.y][ghost3.x+1] === 2) {        
        level[ghost3.y][ghost3.x] = 2;
        ghost3.x = ghost3.x + 1;
        level[ghost3.y][ghost3.x] = 5;
       }
       else if (level[ghost3.y][ghost3.x+1] === 0) {
        level[ghost3.y][ghost3.x] = 0;
        ghost3.x = ghost3.x + 1;
        level[ghost3.y][ghost3.x] = 5;
       }  
       else if (level[ghost3.y][ghost3.x+1] === 6) {
        lives = lives - 1;
        sounddeath.play();
       ghost3.x = ghost3.x
       }
      drawWorld();
     }
     break;
   case 12:    
   if (level[ghost3.y-1][ghost3.x] !== 1){
     if (level[ghost3.y-1][ghost3.x] === 2) {  
       level[ghost3.y][ghost3.x] = 2;   
       ghost3.y = ghost3.y - 1;
       level[ghost3.y][ghost3.x] = 5;
       }
       else if (level[ghost3.y-1][ghost3.x] === 0) {
       level[ghost3.y][ghost3.x] = 0;
       ghost3.y = ghost3.y - 1;
       level[ghost3.y][ghost3.x] = 5;
       }
       else if (level[ghost3.y-1][ghost3.x] === 6) {
        lives = lives - 1;
        sounddeath.play();
       ghost3.y = ghost3.y
      }
      drawWorld();
     }
     break;
   case 13:
   if (level[ghost3.y+1][ghost3.x] !== 1){
     if (level[ghost3.y+1][ghost3.x] === 2) {
       level[ghost3.y][ghost3.x] = 2;     
       ghost3.y = ghost3.y + 1;
       level[ghost3.y][ghost3.x] = 5;
       }
       else if (level[ghost3.y+1][ghost3.x] === 0) {
       level[ghost3.y][ghost3.x] = 0;
       ghost3.y = ghost3.y + 1;
       level[ghost3.y][ghost3.x] = 5;
       }
       else if (level[ghost3.y+1][ghost3.x] === 6) {
        lives = lives - 1;
        sounddeath.play();
       ghost3.y = ghost3.y
      }
       drawWorld();
     }
     break;
     }
 }
 
function getRndInteger(min, max) {
 return Math.floor(Math.random() * (5) ) + 1;
}
 
function getRndInteger2(min, max) {
 return Math.floor(Math.random() * (10) ) + 5;
}
function getRndInteger3(min, max) {
 return Math.floor(Math.random() * (15) ) + 10;
}
 
 
//de functie ghostMove(); vervolgens aanroepen in state 456

function ghostMovearcade() {
 switch (getRndInteger()) {
   case 1:
     if (level[ghost.y][ghost.x-1] !== 1){
       if (level[ghost.y][ghost.x-1] === 2) {
        level[ghost.y][ghost.x] = 2;
        ghost.x = ghost.x - 1;
        level[ghost.y][ghost.x] = 3;
       }
       else if (level[ghost.y][ghost.x-1] === 0) {
        level[ghost.y][ghost.x] = 2;
        ghost.x = ghost.x - 1;
        level[ghost.y][ghost.x] = 3;
       }
       else if (level[ghost.y][ghost.x-1] === 6) {
        lives = lives - 1;
        sounddeath.play();
       ghost.x = ghost.x
       }
      drawWorld();
     }
     break;
   case 2:
   if (level[ghost.y][ghost.x+1] !== 1){
     if (level[ghost.y][ghost.x+1] === 2) {        
        level[ghost.y][ghost.x] = 2;
        ghost.x = ghost.x + 1;
        level[ghost.y][ghost.x] = 3;
       }
       else if (level[ghost.y][ghost.x+1] === 0) {
        level[ghost.y][ghost.x] = 2;
        ghost.x = ghost.x + 1;
        level[ghost.y][ghost.x] = 3;
       }  
       else if (level[ghost.y][ghost.x+1] === 6) {
        lives = lives - 1;
        sounddeath.play();
       ghost.x = ghost.x
       }
      drawWorld();
     }
     break;
   case 3:    
   if (level[ghost.y-1][ghost.x] !== 1){
     if (level[ghost.y-1][ghost.x] === 2) {  
       level[ghost.y][ghost.x] = 2;   
       ghost.y = ghost.y - 1;
       level[ghost.y][ghost.x] = 3;
       }
       else if (level[ghost.y-1][ghost.x] === 0) {
       level[ghost.y][ghost.x] = 2;
       ghost.y = ghost.y - 1;
       level[ghost.y][ghost.x] = 3;
       }
       else if (level[ghost.y-1][ghost.x] === 6) {
        lives = lives - 1;
        sounddeath.play();
       ghost.y = ghost.y
      }
      drawWorld();
     }
     break;
   case 4:
   if (level[ghost.y+1][ghost.x] !== 1){
     if (level[ghost.y+1][ghost.x] === 2) {
       level[ghost.y][ghost.x] = 2;     
       ghost.y = ghost.y + 1;
       level[ghost.y][ghost.x] = 3;
       }
       else if (level[ghost.y+1][ghost.x] === 0) {
       level[ghost.y][ghost.x] = 2;
       ghost.y = ghost.y + 1;
       level[ghost.y][ghost.x] = 3;
       }
       else if (level[ghost.y+1][ghost.x] === 6) {
        lives = lives - 1;
        sounddeath.play();
       ghost.y = ghost.y
      }
       drawWorld();
     }
     break;
     }
 }
 function ghost2Movearcade() {
 switch (getRndInteger2()) {
   case 5:
     if (level[ghost2.y][ghost2.x-1] !== 1){
       if (level[ghost2.y][ghost2.x-1] === 2) {
        level[ghost2.y][ghost2.x] = 2;
        ghost2.x = ghost2.x - 1;
        level[ghost2.y][ghost2.x] = 4;
       }
       else if (level[ghost2.y][ghost2.x-1] === 0) {
        level[ghost2.y][ghost2.x] = 2;
        ghost2.x = ghost2.x - 1;
        level[ghost2.y][ghost2.x] = 4;
       }
       else if (level[ghost2.y][ghost2.x-1] === 6) {
        lives = lives - 1;
        sounddeath.play();
       ghost2.x = ghost2.x
       }
      drawWorld();
     }
     break;
   case 6:
   if (level[ghost2.y][ghost2.x+1] !== 1){
     if (level[ghost2.y][ghost2.x+1] === 2) {        
        level[ghost2.y][ghost2.x] = 2;
        ghost2.x = ghost2.x + 1;
        level[ghost2.y][ghost2.x] = 4;
       }
       else if (level[ghost2.y][ghost2.x+1] === 0) {
        level[ghost2.y][ghost2.x] = 2;
        ghost2.x = ghost2.x + 1;
        level[ghost2.y][ghost2.x] = 4;
       }  
       else if (level[ghost2.y][ghost2.x+1] === 6) {
        lives = lives - 1;
        sounddeath.play();
       ghost2.x = ghost2.x
       }
      drawWorld();
     }
     break;
   case 7:    
   if (level[ghost2.y-1][ghost2.x] !== 1){
     if (level[ghost2.y-1][ghost2.x] === 2) {  
       level[ghost2.y][ghost2.x] = 2;   
       ghost2.y = ghost2.y - 1;
       level[ghost2.y][ghost2.x] = 4;
       }
       else if (level[ghost2.y-1][ghost2.x] === 0) {
       level[ghost2.y][ghost2.x] = 2;
       ghost2.y = ghost2.y - 1;
       level[ghost2.y][ghost2.x] = 4;
       }
       else if (level[ghost2.y-1][ghost2.x] === 6) {
        lives = lives - 1;
        sounddeath.play();
       ghost2.y = ghost2.y
      }
      drawWorld();
     }
     break;
   case 8:
   if (level[ghost2.y+1][ghost2.x] !== 1){
     if (level[ghost2.y+1][ghost2.x] === 2) {
       level[ghost2.y][ghost2.x] = 2;     
       ghost2.y = ghost2.y + 1;
       level[ghost2.y][ghost2.x] = 4;
       }
       else if (level[ghost2.y+1][ghost2.x] === 0) {
       level[ghost2.y][ghost2.x] = 2;
       ghost2.y = ghost2.y + 1;
       level[ghost2.y][ghost2.x] = 4;
       }
       else if (level[ghost2.y+1][ghost2.x] === 6) {
        lives = lives - 1;
        sounddeath.play();
       ghost2.y = ghost2.y
      }
       drawWorld();
     }
     break;
     }
 }
 
function ghost3Movearcade() {
 switch (getRndInteger3()) {
   case 10:
     if (level[ghost3.y][ghost3.x-1] !== 1){
       if (level[ghost3.y][ghost3.x-1] === 2) {
        level[ghost3.y][ghost3.x] = 2;
        ghost3.x = ghost3.x - 1;
        level[ghost3.y][ghost3.x] = 5;
       }
       else if (level[ghost3.y][ghost3.x-1] === 0) {
        level[ghost3.y][ghost3.x] = 2;
        ghost3.x = ghost3.x - 1;
        level[ghost3.y][ghost3.x] = 5;
       }
       else if (level[ghost3.y][ghost3.x-1] === 6) {
        lives = lives - 1;
        sounddeath.play();
       ghost3.x = ghost3.x
       }
      drawWorld();
     }
     break;
   case 11:
   if (level[ghost3.y][ghost3.x+1] !== 1){
     if (level[ghost3.y][ghost3.x+1] === 2) {        
        level[ghost3.y][ghost3.x] = 2;
        ghost3.x = ghost3.x + 1;
        level[ghost3.y][ghost3.x] = 5;
       }
       else if (level[ghost3.y][ghost3.x+1] === 0) {
        level[ghost3.y][ghost3.x] = 2;
        ghost3.x = ghost3.x + 1;
        level[ghost3.y][ghost3.x] = 5;
       }  
       else if (level[ghost3.y][ghost3.x+1] === 6) {
        lives = lives - 1;
        sounddeath.play();
       ghost3.x = ghost3.x
       }
      drawWorld();
     }
     break;
   case 12:    
   if (level[ghost3.y-1][ghost3.x] !== 1){
     if (level[ghost3.y-1][ghost3.x] === 2) {  
       level[ghost3.y][ghost3.x] = 2;   
       ghost3.y = ghost3.y - 1;
       level[ghost3.y][ghost3.x] = 5;
       }
       else if (level[ghost3.y-1][ghost3.x] === 0) {
       level[ghost3.y][ghost3.x] = 2;
       ghost3.y = ghost3.y - 1;
       level[ghost3.y][ghost3.x] = 5;
       }
       else if (level[ghost3.y-1][ghost3.x] === 6) {
        lives = lives - 1;
        sounddeath.play();
       ghost3.y = ghost3.y
      }
      drawWorld();
     }
     break;
   case 13:
   if (level[ghost3.y+1][ghost3.x] !== 1){
     if (level[ghost3.y+1][ghost3.x] === 2) {
       level[ghost3.y][ghost3.x] = 2;     
       ghost3.y = ghost3.y + 1;
       level[ghost3.y][ghost3.x] = 5;
       }
       else if (level[ghost3.y+1][ghost3.x] === 0) {
       level[ghost3.y][ghost3.x] = 2;
       ghost3.y = ghost3.y + 1;
       level[ghost3.y][ghost3.x] = 5;
       }
       else if (level[ghost3.y+1][ghost3.x] === 6) {
        lives = lives - 1;
        sounddeath.play();
       ghost3.y = ghost3.y
      }
       drawWorld();
     }
     break;
     }
 }