const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var BackgroundImg,platform;
var bird, slingShot;

function preload () {
    
BackgroundImg = loadImage("bg3.jpg");

}


function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    
    sidewall = new Ground (1180,200,20,1200)
    

    box1 = new Box(760,150,110,80);
    box2 = new Box(855,150,110,80);

    log1 = new Log(805,260,300, PI/2);

    box3 = new Box(692,255,50,40);
    box4 = new Box(920,255,50,40);
   
    box5 = new Box (810,255,60,40);

    box6 = new Box(810,100,100,100);
    
    bird = new Poligon(100,100,200,100);


    slingshot = new SlingShot(bird.body,{x:200, y:100});
}

function draw(){
    background(BackgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    sidewall.display();
    log1.display();

    box3.display();
    box4.display();
    
   

    box5.display();
    box6.display();

    bird.display();

    slingshot.display(); 
    
    

}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}