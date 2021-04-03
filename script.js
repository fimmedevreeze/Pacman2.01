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
soundeat = loadSound('Sounds/eat_fruit.wav');
sounddeath = loadSound('Sounds/death_2.wav');
soundgameover = loadSound('Sounds/death_1.wav');
wall = loadImage("Images/maartenslogoo.png");
pacmanright = loadImage("Images/pacmanright.png");
pacmanleft = loadImage("Images/pacmanleft.png");
pacmanup = loadImage("Images/pacmanup.png");
pacmandown = loadImage("Images/pacmandown.png");
imgpacman = loadImage('Images/pacman_PNG87.png');
redright = loadImage("Images/redright.png");
redleft = loadImage("Images/redleft.png");
redup = loadImage("Images/redup.png");
reddown = loadImage("Images/reddown.png");
blueright = loadImage("Images/blueright.png");
blueleft = loadImage("Images/blueleft.png");
blueup = loadImage("Images/blueup.png");
bluedown = loadImage("Images/bluedown.png");
pinkright = loadImage("Images/pinkright.png");
pinkleft = loadImage("Images/pinkleft.png");
pinkup = loadImage("Images/pinkup.png");
pinkdown = loadImage("Images/pinkdown.png");
}

function setup() {
createCanvas(800, 529);

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
    drawScore();
    drawHighscore();
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
    drawScore();
    drawHighscore();
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
    drawScore();
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

function drawScore(){
   noStroke();
   fill(255);
   textSize(30);
   textAlign(LEFT);
   text("Score" + " " + score, 5, height - 5);

}

function drawHighscore(){
  if (score > highscore) {
   localStorage.setItem('game1HighScore', score);
   highscore = score
   text("Highscore" + " " + highscore, 200, height - 5);
   noStroke();
   fill(255);
   textSize(30);
   textAlign(LEFT);
    }
  else {
   highscore = localStorage.getItem("game1HighScore")
   text("Highscore" + " " + highscore, 200, height - 5);
   noStroke();
   fill(255);
   textSize(30);
   textAlign(LEFT);
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
 switch(keyCode){
   case 37:
   case 65:
   image(pacmanleft, pacman.x * 25 +5 , pacman.y * 26 +5 , 20, 20);
   break;
    case 39:
   case 68:
      image(pacmanright, pacman.x * 25 +5 , pacman.y * 26 +5 , 20, 20);

   break;
    case 38:
   case 87:
       image(pacmanup, pacman.x * 25 +5 , pacman.y * 26 +5 , 20, 20);

   break;
    case 40:
   case 83:
      image(pacmandown, pacman.x * 25 +5 , pacman.y * 26 +5 , 20, 20);

   break;
   default:
        image(pacmanright, pacman.x * 25 +5 , pacman.y * 26 +5 , 20, 20);
   break;

 }
     }
  
 


 
function drawGhost1(){
 switch(getRndInteger()){
   case 1:
      image(redleft, ghost.x * 25 +5 , ghost.y * 26 +5 , 20, 20);
   break;
    case 2:
         image(redright, ghost.x * 25 +5 , ghost.y * 26 +5 , 20, 20);
   break;
    case 3:
       image(redup, ghost.x * 25 +5 , ghost.y * 26 +5 , 20, 20);
   break;
    case 4:
      image(reddown, ghost.x * 25 +5 , ghost.y * 26 +5 , 20, 20);
   break;
   default:
        image(redright, ghost.x * 25 +5 , ghost.y * 26 +5 , 20, 20);
   break;
 }
}
 
function drawGhost2(){
 switch(getRndInteger2()){
   case 5:
      image(blueleft, ghost2.x * 25 +5 , ghost2.y * 26 +5 , 20, 20);
   break;
    case 6:
         image(blueright, ghost2.x * 25 +5 , ghost2.y * 26 +5 , 20, 20);
   break;
    case 7:
       image(blueup, ghost2.x * 25 +5 , ghost2.y * 26 +5 , 20, 20);
   break;
    case 8:
      image(bluedown, ghost2.x * 25 +5 , ghost2.y * 26 +5 , 20, 20);
   break;
   default:
        image(blueright, ghost2.x * 25 +5 , ghost2.y * 26 +5 , 20, 20);
   break;
 }
}
 
function drawGhost3(){
 switch(getRndInteger3()){
   case 10:
      image(pinkleft, ghost3.x * 25 +5 , ghost3.y * 26 +5 , 20, 20);
   break;
    case 11:
         image(pinkright, ghost3.x * 25 +5 , ghost3.y * 26 +5 , 20, 20);
   break;
    case 12:
       image(pinkup, ghost3.x * 25 +5 , ghost3.y * 26 +5 , 20, 20);
   break;
    case 13:
      image(pinkdown, ghost3.x * 25 +5 , ghost3.y * 26 +5 , 20, 20);
   break;
   default:
        image(pinkright, ghost3.x * 25 +5 , ghost3.y * 26 +5 , 20, 20);
   break;
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
    score= 0;
    lives= 3;
       
 }
 else if (lives === 0){
   state = 8;
   soundgameover.play();
    score= 0;
    lives= 3;
 }
}
function gameEndedarcade(){
 
  if (lives === 0){
   state = 8;
   soundgameover.play();
   score= 0;
    lives= 3;
 }
}
 
var ghost = {
 x: 15,
 y:  9,
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
 x: 13,
 y:  9,
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
 x: 18,
 y:  9,
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
 

var timer1 = 5000;

      function getRndInteger(min, max) {
         if (millis() > timer1){
           return Math.floor(Math.random() * (5) ) + 1;

     timer1 = timer1 + 5000;
  }
 
}
var timer2 = 10000;
function getRndInteger2(min, max) {
   if (millis() > timer2){
           return Math.floor(Math.random() * (10) ) + 5;

     timer2 = timer2 + 5000;
  }
 
 
}
var timer3 = 15000;
function getRndInteger3(min, max) {
   if (millis() > timer3){
       return Math.floor(Math.random() * (15) ) + 10;
   
    
     timer3 = timer3 + 5000;
  }
 
 
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