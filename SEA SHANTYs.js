var sea, shipImage;
var edges;

function preload(){
  shipImage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  sea = loadImage("sea.png");
}

function setup(){
  createCanvas(600,200);
  sea = createSprite(200,180,400,20);
  seaImage.addImage("sea",sea);
  // creating trex
  shipImage = createSprite(50,160,20,50);
  shipImage.addAnimation("sailing", shipImage);
  edges = createEdgeSprites();
  
  //adding scale and position to trex
  shipImage.scale = 0.7;
  shipImage.x = 50
}


function draw(){
  //set background color 
  background("white");
  
  //logging the y position of the trex
  console.log(ship.y);
  
  //jump when space key is pressed
  if(keyDown("space")){
    shipImage.velocityY = -10;
  }
  
  shipImage.velocityY = trex.velocityY + 0.5;
  groundImage.velocityX = -10
  if (groundImage.x < 0)
  {
    groundImage.x = groundImage.width / 2
  }
  //stop trex from falling down
  trex.collide(groundImage);
  drawSprites();
}