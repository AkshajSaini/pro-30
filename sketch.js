const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1;
var bird, slingShot;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,800,1200,20);  
   //targets
        //1st pyramid
        block1 = new Pig(390+100, 155+100, 30, 40);

        block2 = new Pig(420+100, 195+100, 30, 40);
        block3 = new Pig(390+100, 195+100, 30, 40);
        block4 = new Pig(360+100, 195+100, 30, 40);

        block5 = new Pig(450+100, 235+100, 30, 40);
        block6 = new Pig(420+100, 235+100, 30, 40);
        block7 = new Pig(390+100, 235+100, 30, 40);
        block8 = new Pig(360+100, 235+100, 30, 40);
        block9 = new Pig(330+100, 235+100, 30, 40);
        platform1 = new Ground(390+100, 335+10, 200, 5);

        //2nd pyramid
       block11 = new Pig(390+500, 155, 30, 40);

       block12 = new Pig(420+500, 195, 30, 40);
       block13 = new Pig(390+500, 195, 30, 40);
       block14 = new Pig(360+500, 195, 30, 40);

       block15 = new Pig(450+500, 235, 30, 40);
       block16 = new Pig(420+500, 235, 30, 40);
       block17 = new Pig(390+500, 235, 30, 40);
       block18 = new Pig(360+500, 235, 30, 40);
       block19 = new Pig(330+500, 235, 30, 40);
       platform2 = new Ground(390+500, 155+100, 200, 5);

        // striker
    bird = new Bird(100,100);
    slingshot = new SlingShot(bird.body,{x:155, y:458});
}

function draw(){
    background(0);
    Engine.update(engine);
    strokeWeight(4);

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    //platform1.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    //platform2.display();
    ground.display();
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