
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob,bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob (200,100,50,50);
	bobObject2 = new Bob (250,200,50,50);
	bobObject3 = new Bob (300,250,50,50);
	bobObject4 = new Bob (350,300,50,50);
	bobObject5 = new Bob (400,350,50,50);
	roof = new Roof(175,375,50,50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
 
}



