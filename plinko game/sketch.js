// creating the constants.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// creating the arrays
var particles = [];
var divisions = [];
var plinkos = [];


function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;
  
	ground1 = new ground(240,795,480,10);

	for(var k = 0; k < 480; k = k + 80) {
		var bar1 = divisions.push(new Division(k,650,10,300));
	  }


	Engine.run(engine);
  
}


function draw() {
  background("black");
  ground1.display();
  
  bar1.display();
  drawSprites();
 
}



