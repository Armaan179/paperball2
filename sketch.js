
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,paperimg;
var dustbin1,dustbin2,dustbin3,dustbinIMG;


function preload(){
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	paper = new Paper(200,200,20);
	dustbin = new Dustbin(540,660,100,20)
	//Create the Bodies Here.
	var groundOptions={isStatic:true}
	ground=Bodies.rectangle(400,680,800,20,groundOptions);
	
	World.add (world,ground)
	console.log(ground);


	Engine.run(engine);
  
}


function draw() {
	background(255);

  rectMode(CENTER);
  Engine.update(engine);

	rectMode(CENTER);
	rect(ground.position.x,ground.position.y,800,20);
	paper.display();
	dustbin.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x : 5.5, y : -6.4})
	}
}