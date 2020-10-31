const Engine = Matter.Engine 
const World = Matter.World 
const Bodies = Matter.Bodies 
const Body = Matter.Body 
const Constraint = Matter.Constraint 

var engine,world,ground

function setup() {
  createCanvas(800,400);
 engine = Engine.create()
 world = engine.world;
ground = new Ground(400,370,800,10)
ball = new Ball(400,100,20,20)
box = new Box(500,350,20,20)
box2 = new Box(500,300,20,20)
rope = new Rope(ball.body,{x:600,y:200})


}

function draw() {
  background("black") 
Engine.update(engine)
ground.display();
ball.display();
box.display();
box2.display();
rope.display();




}