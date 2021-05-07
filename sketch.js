const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;




var ground
var world, engine;
var stand1, stand2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10;



function preload(){


}

function setup(){
    createCanvas(1000,600);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(500,580,1000,20);
    stand1 = new Ground(350, 450, 200, 10);
    stand2 = new Ground(700, 350, 200,10);

    block1 = new Box(350,448,30,40);
    

}

function draw(){
    background("brown");

    ground.display();
    stand1.display();
    stand2.display();

    block1.display();

}

