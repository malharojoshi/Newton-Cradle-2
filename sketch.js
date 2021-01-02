const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {}

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;
  box = new Box(400, 200, 400, 50);

  pendulum = new Pendulum(400, 500, 50, "red");
  sling = new Sling(pendulum.body, box.body, 0, 0);
  pendulum2 = new Pendulum(500, 500, 50, "blue");
  sling2 = new Sling(pendulum2.body, box.body, 100, 0);
  pendulum3 = new Pendulum(300, 500, 50, "orange");
  sling3 = new Sling(pendulum3.body, box.body, -100, 0);
  pendulum4 = new Pendulum(600, 500, 50, "green");
  sling4 = new Sling(pendulum4.body, box.body, 200, 0);
  pendulum5 = new Pendulum(200, 500, 50, "yellow");
  sling5 = new Sling(pendulum5.body, box.body, -200, 0);
  Engine.run(engine);
}

function draw() {
  //rectMode(CENTER);
  background(200);
  Engine.update(engine);
  box.display();
  pendulum.display();
  sling.display();
  pendulum2.display();
  sling2.display();
  pendulum3.display();
  sling3.display();
  pendulum4.display();
  sling4.display();
  pendulum5.display();
  sling5.display();
}
function mouseDragged() {
  Matter.Body.setPosition(pendulum5.body, { x: mouseX, y: mouseY });
}
