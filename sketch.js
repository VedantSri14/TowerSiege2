const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var striker;
var ground1, ground2, ground3;
var box1,
	box2,
	box3,
	box4,
	box5,
	box6,
	box7,
	box8,
	box9,
	box10,
	box11,
	box12,
	box13,
	box14,
	box15,
	box16;
var box17, box18, box19, box20, box21, box22, box23, box24, box25;
var slingshot;

function setup() {
	createCanvas(1188, 563);

	engine = Engine.create();
	world = engine.world;

	striker = new Hexagon(100, 200);

	ground1 = new Ground(520, 370, 330, 15);
	ground2 = new Ground(890, 250, 250, 15);
	ground3 = new Ground(590, 560, 1198, 40);

	//Stack no.: 1
	box1 = new Box(400, 350, 40, 60);
	box2 = new Box(440, 350, 40, 60);
	box3 = new Box(480, 350, 40, 60);
	box4 = new Box(520, 350, 40, 60);
	box5 = new Box(560, 350, 40, 60);
	box6 = new Box(600, 350, 40, 60);
	box7 = new Box(640, 350, 40, 60);

	box8 = new Box(440, 290, 40, 60);
	box9 = new Box(480, 290, 40, 60);
	box10 = new Box(520, 290, 40, 60);
	box11 = new Box(560, 290, 40, 60);
	box12 = new Box(600, 290, 40, 60);

	box13 = new Box(480, 230, 40, 60);
	box14 = new Box(520, 230, 40, 60);
	box15 = new Box(560, 230, 40, 60);

	box16 = new Box(520, 170, 40, 60);

	//Stack no.: 2
	box17 = new Box(810, 230, 40, 60);
	box18 = new Box(850, 230, 40, 60);
	box19 = new Box(890, 230, 40, 60);
	box20 = new Box(930, 230, 40, 60);
	box21 = new Box(970, 230, 40, 60);

	box22 = new Box(850, 170, 40, 60);
	box23 = new Box(890, 170, 40, 60);
	box24 = new Box(930, 170, 40, 60);

	box25 = new Box(890, 110, 40, 60);

	slingshot = new Sling(striker.body, { x: 50, y: 200 });

	Engine.run(engine);
}

function draw() {
	rectMode(CENTER);
	background(0);

	textSize(30);
	fill("white");
	text(
		"Drag and release the hexagonal stone, to launch it towards the boxes!",
		10,
		35
	);
	fill("white");
	striker.display();

	fill("brown");
	ground1.display();
	ground2.display();
	ground3.display();

	//displaying the first stack.
	fill("limegreen");
	box1.display();
	box2.display();
	box3.display();
	box4.display();
	box5.display();
	box6.display();
	box7.display();

	fill("lightblue");
	box8.display();
	box9.display();
	box10.display();
	box11.display();
	box12.display();

	fill("pink");
	box13.display();
	box14.display();
	box15.display();

	fill("purple");
	box16.display();

	//displaying the second stack.
	fill("grey");
	box17.display();
	box18.display();
	box19.display();
	box20.display();
	box21.display();

	fill("red");
	box22.display();
	box23.display();
	box24.display();

	fill("blue");
	box25.display();

	slingshot.display();
}
function mouseDragged() {
	Matter.body.setPosition({ x: mouseX, y: mouseY });
}
function mouseReleased() {
	slingshot.fly();
}
function keyPressed() {
	if (keyCode === 32) {
		slingshot.attach(body);
	}
}
