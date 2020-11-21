const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world, engine;
var dustbin1, dustbin2, dustbin3;
var paper;
var ground;
var bg;
var dustbinImg;

function preload() {
	//bg = loadImage("cbRoom.png");
	dustbinImg = loadImage("dustbinFinal.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);


	dustbin1 = new Dustbin(610, 463, 50, 200);
	dustbin2 = new Dustbin(400, 463, 50, 200);
	dustbin3 = new Dustbin(505.5, 583, 260, 50);
	ground = new Ground(200, 580, 100000, 20);
	paper = new Paper(65, 540, 75);

}


function draw() {
	Engine.update(engine);
	rectMode(CENTER);
	background("lightblue");
	fill("yellow");
	stroke("red");
	strokeWeight(4);
	textSize(35);
	textFont("georgia");
	text("Press UP arrow key to throw the trash", 55, 100)
	
	dustbin1.display();
	dustbin2.display()
	dustbin3.display()
	ground.display();
	paper.display();
	image(dustbinImg,1005,430,200,238);
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, { x:1000, y: -1500 });
	}
}

