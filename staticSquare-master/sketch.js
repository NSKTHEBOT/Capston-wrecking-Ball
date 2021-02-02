const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(300,390,600,20,ground_options);
    World.add(world,ground);


    box1=new box(510,370)
    box2=new box(510,330)
    box3=new box(510,290)
    box4=new box(510,250)
    box5=new box(510,210)
    box6=new box(510,170)
    box7=new box(450,370)
    box8=new box(450,330)
    box9=new box(450,290)
    box10=new box(450,250)

    box11=new box(450,210)
    box12=new box(450,170)
    box13=new box(390,370)
    box14=new box(390,330)
    box15=new box(390,290)
    box16=new box(390,250)
    box17=new box(390,210)
    box18=new box(390,170)
   
    ball1=new ball(200,200)
    slingSHOT=new slingshot(ball1.body,{x:200,y:0})
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
slingSHOT.display();
ball1.display();
    
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,600,20);
}
function mouseDragged(){
    Matter.Body.setPosition(this.ball1,{x:mouseX,y:mouseY});
  }
  
  function mouseReleased(){
    slingSHOT.fly();
  }
  function keypressed(){
    if(keycode===32){
        slingSHOT.attach();  
      }  
  }
  
  