const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body= Matter.Body;

var engine, world;
var ground,box1,box2,box3,box4;
var pig1,pig2;
var log1,log2,log3, log4;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

   
   box1= new Box(750,350,80,80);
   box2= new Box(920,350,80,80);
   box3= new Box(750,240,80,80);
   box4=new Box(920,240,80,80)
   ground= new Ground(600,400,1200,15);
   pig1= new Pig(800,350);
   log1= new Log(820,270,300,PI/2);
   log2= new Log(820,180,300,PI/2)
   log3 = new Log(760,120,150,PI/7);
   log4= new Log(870,120,150,-PI/7);
   bird= new Bird(200,100,50,50);
}
function draw(){
    background(0);
    Engine.update(engine);
   
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    pig1.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
}
