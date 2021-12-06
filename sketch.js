const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;
const Constraint = Matter.Constraint;

var bg,ground,gimg;
var runner,runnerImg;
var ice=[];
var maxSnow=100;
var world, engine;
var snow;

function preload() {
bg=loadImage("snow2.jpg");
gimg=loadImage("ground.png");
runnerImg=loadImage("boy2.gif");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
engine=Engine.create();
  world=engine.world;
  Engine.run(engine);

 ground=createSprite( 0 , 0 ,width , height );
 
 ground.addImage("ground",gimg);
 ground.scale=-3.0;
 ground.velocityX=-10;

  runner=createSprite(150,480);
  runner.addImage("runner",runnerImg);
  runner.scale=0.1;
  runner.velocityX=2;
  runner.setCollider("rectangle",15,-20,100,180);
snow = new Snow(100,100);

santa1 = new Santa(width/2 -315 , height-200);
slingShot = new SlingShot(santa1.body , {x:width/2-300 , y: height - 200})
 
}

function draw() {
  background(bg);
  Engine.update(engine);
  if(ground.x < 530){
    ground.x=600;
  }

  if(runner.x > 1200){
    runner.x=150;
  }

  if(keyWentDown("space")&& runner.y >= 100) {
    runner.velocityY = -12;
}

//add gravity
runner.velocityY = runner.velocityY + 0.8

  for(var i = 0;i < maxSnow;i++){
    snow.display();
    snow.changePosition()
    }    

ground.display();
  
  runner.collide(ground);
  
  
  drawSprites();
  santa1.display();
  slingShot.display();
}

function mouseDragged ()
{
  Matter.Body.setPosition(santa1.body, {x:mouseX , y:mouseY});
}

function mouseReleased()
{
  slingShot.fly();
}
