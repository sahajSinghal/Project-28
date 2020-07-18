var ground, groundSprite;
var dustbinVertical1, dustbinVertical2;
var dustbinHorizontal;
var paper;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() 
{
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, 665, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor= ("yellow");

	dustbinVertical1 = new DustbinVertical(540,615);
	dustbinVertical2 = new DustbinVertical(760,615);

	dustbinHorizontal = new DustbinHorizontal(650,655);

	paper = new Paper(100,450);

	launcher = new Launcher(paper.body,{x:100, y:430});

	Engine.run(engine);
}

function draw() 
{
	rectMode(CENTER);
	background(120);
	
	paper.display();

	dustbinHorizontal.display();

	launcher.display();

	drawSprites();
}

function mouseDragged() 
{
    Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
    launcher.fly();
}