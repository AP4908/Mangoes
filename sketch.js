
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var treeImage;
var ground; 
var boyImage;
var stone;
var m1, m2, m3, m4, m5;
var rope;



function preload()
{
  boyImage = loadImage("Images/boy.png");
  treeImage = loadImage("Images/tree.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//tree = new Tree(625, 450, 0.001, 0.001);
  ground = new Ground(400, 645, 800, 20);
 
//	boy = new Boy(250, 600, 0.001, 0.001);
	stone = new Stone(100, 600, 20);
	m1 = new Mango(600, 300, 25);
	m2 = new Mango(630, 350, 25);
	m3 = new Mango(670, 325, 25);
	m4 = new Mango(560, 400, 25);
	m5 = new Mango(760, 370, 25);
	rope = new connect(stone.body, {x:150, y:530});

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
	rectMode(CENTER);
  background(255);
  
  drawSprites();


 imageMode(CENTER);
  image(boyImage, 200, 585, 200, 200);
  image(treeImage, 610, 410, 330, 530);
  //tree.display();
  ground.display();
  //boy.display();
  stone.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  rope.display();

  detectCollision(stone, m1);
  detectCollision(stone, m2);
  detectCollision(stone, m3);
 detectCollision(stone, m4);
 detectCollision(stone, m5);
}
  

function detectCollision(stoneOb, mangoOb)
{  
    var distance = dist(stoneOb.body.position.x, stoneOb.body.position.y, mangoOb.body.position.x, mangoOb.body.position.y )
    if(distance<= stoneOb.radius+ mangoOb.radius){
      Matter.Body.setStatic(mangoOb.body, false);
    }
  }
  


function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope.fly();
}

function keyPressed(){
  if(keyCode === 32){
      
      rope.attach(stone.body);
      Matter.Body.setPosition(stone.body, {x: 150, y:530});
  }
}