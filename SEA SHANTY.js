//c9 Student Activity
var shipImage
var sea
var edges

function preload(){
  shipImage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  sea = loadImage("sea.png");
  
}

function setup() {
  shipImage = createSprite(200,180,400,20);
  shipImage.addImage("Ship",ship);
  createCanvas(400, 400);
  edges = createEdgeSprites();
  
 
}

function draw() {
  shipImage.velocityX = 7;

  background("blue");
  if(sea.x < 0){
    sea.x = sea.width/2;
  }
  shipImage.collide(sea);
  drawSprites();
}