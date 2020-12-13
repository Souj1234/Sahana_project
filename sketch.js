var rect1,rect2,rect3,ball1,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	
	Engine.run(engine);
	ground=new Ground(400,670,800,10);
	rect1=new Ground(400,660,150,15)
	rect2=new Ground(320,620,15,100)
	rect3=new Ground(480,620,15,100)
	ball1=new Ball(50,620,30)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("red")
  rect1.display();
  rect2.display();
  rect3.display();
  fill("yellow");
  ball1.display();
  fill("blue");
  ground.display();
  drawSprites();
}

function keyPressed() {
 if (keyCode === UP_ARROW){
	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:80,y:-85});
 }
}
