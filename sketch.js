const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var groundObj;
var rope;
var fruit;
var fruit_con


function setup() 
{
  createCanvas(500,700);

  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  groundObj = new Ground(200,690,600,20);
  rope = new Rope(7,{x:250,y:80})
  fruit = Bodies.circle(70,70,20,{density:0.000000001})

  World.add(world,fruit)
  Composite.add(rope.body,fruit)
  fruit_con = new Link(rope,fruit)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  groundObj.show();
  rope.show();
  ellipse(fruit.position.x,fruit.position.y,20)
  Engine.update(engine);
  

 
   
}
