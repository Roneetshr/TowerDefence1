const Engine=Matter.Engine;

const World=Matter.World;

const Bodies=Matter.Bodies;

const Constraint=Matter.Constraint;


var grounds;

var stand;

var slingShot;

var block1,block2,block3,block4,block5,block6,block7,block8,block9;

var world, engine;

var polygon,polygonImage;



function preload(){

polygonImage=loadImage("polygon.png");

}

function setup(){
createCanvas(800,600);

engine=Engine.create()

world=engine.world;

Engine.run(engine);

stand = new Ground(405,305,250,30);

block1 = new Box(350,295,30,40);

block2 = new Box(380,295,30,40);

block3 = new Box(410,295,30,40);

block4 = new Box(440,295,30,40);

block5 = new Box(470,295,30,40);

block6 = new Box(390,155,30,40);

block7 = new Box(410,155,30,40);

block8 = new Box(440,155,30,40);

block9 = new Box(410,115,30,40);

polygon = Bodies.circle(100,120,20);
World.add(world,polygon);

slingShot= new Slingshot(this.polygon,{x:70,y:150})
}
function draw(){

background("black");


stand.display()

block1.display()
block2.display()
block3.display()
block4.display()
block5.display()
block6.display()
block7.display()
block8.display()
block9.display()

image(polygonImage,polygon.position.x,polygon.position.y,30,30);
slingShot.display()
}

function mouseDragged(){
Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})

}

function mouseReleased(){
slingShot.fly()    
}

