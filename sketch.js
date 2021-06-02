var fixedRect, movingRect;
var ball1,wall1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
  ball1 = createSprite(100,50,50,80);
  ball1.shapeColor = "pink";
  ball1.debug = "true";
  ball1.velocityX=2;

  wall1 = createSprite(1000,50,60,60);
  wall1.shapeColor = "blue";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;


  if(touching(ball1,wall1)){
    text("is touching -True",200,100);
  }
  else{
    text("is not touching - False",200,100);
  }
  
  if(touching(movingRect,ball1)){
    text("is touching -True",200,100);
  }
  drawSprites();
}

