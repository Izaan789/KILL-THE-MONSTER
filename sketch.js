const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){

  backgroundImg = loadImage("GamingBackground.png")
}

function setup() {
  createCanvas(1360,620);

  engine = Engine.create();
  world = engine.world;

  hero = new Hero(200,300,370,180)

  attach = new Chain(hero.body,{x:226, y:46});

  monster = new Monster(870,320,300,240)

  ground = new Ground(500,550,900,20)

  box1 = new Box(500,500,60,60)
  box2 = new Box(560,500,60,60)
  box3 = new Box(620,500,60,60)
  box4 = new Box(680,500,60,60)


  box7 = new Box(500,440,60,60)
  box8 = new Box(560,440,60,60)
  box9 = new Box(620,440,60,60)
  box10 = new Box(680,440,60,60)


  box13 = new Box(500,380,60,60)
  box14 = new Box(560,380,60,60)
  box15 = new Box(620,380,60,60)
  box16 = new Box(680,380,60,60)


  box19 = new Box(500,320,60,60)
  box20 = new Box(560,320,60,60)
  box21 = new Box(620,320,60,60)
  box22 = new Box(680,320,60,60)


  box25 = new Box(500,260,60,60)
  box26 = new Box(560,260,60,60)
  box27 = new Box(620,260,60,60)
  box28 = new Box(680,260,60,60)


  box31 = new Box(500,200,60,60)
  box32 = new Box(560,200,60,60)
  box33 = new Box(620,200,60,60)
  box34 = new Box(680,200,60,60)

}

function draw() {
  background(backgroundImg);  
Engine.update(engine)

hero.display();
monster.display();
  

  fill("brown")
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();

  box7.display();
  box8.display();
  box9.display();
  box10.display();

  box13.display();
  box14.display();
  box15.display();
  box16.display();

  box19.display();
  box20.display();
  box21.display();
  box22.display();

  box25.display();
  box26.display();
  box27.display();
  box28.display();

  box31.display();
  box32.display();
  box33.display();
  box34.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}