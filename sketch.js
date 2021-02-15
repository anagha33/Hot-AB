var balloon

function preload(){
  backgroundImg = loadImage("sprites/bg.png");  
}

function setup() {
  createCanvas(500,500);
  createSprite(400, 200, 50, 50);

  balloon = new Balloon(700,320,70,70);
}

function draw() {
  background(255,255,255);  
  
balloon.display();
 
  

if(keyDown(LEFT_ARROW)){
balloon.x = baloon.x-10;
} 
else if(keyDown(RIGHT_ARROW)){
  balloon.x = balloon.x+10;
}
else if(keyDown(UP_ARROW)){
  balloon.y = balloon.y-10;
}
else if(keyDown(DOWN_ARROW)){
  balloon.y = balloon.y+10;
}
drawSprites();
}