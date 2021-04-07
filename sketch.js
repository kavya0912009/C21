var fixedRect, movingRect;
var gameobject1,gameobject2,gameobject3,gameobject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  
  gameObject1 = createSprite(100, 100, 50, 50);
 gameobject2 = createSprite(200,100,50,50);
 gameobject3 = createSprite(300,100,50,50);
 gameobject4 = createSprite(400,100,50,50);
 
 gameObject1.shapeColor = "green";
gameobject2.shapeColor = "green";
gameobject3.shapeColor = "green";
gameobject4.shapeColor = "green";
 
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, gameObject1)){
    movingRect.shapeColor = "blue";
    gameObject1.shapeColor = "blue";
  }
  else {
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}