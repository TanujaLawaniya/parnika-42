const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var drops=[];

function preload(){
    
}

function setup(){
   createCanvas(400,600);
   engine=Engine.create();
   world=engine.world;

   if(frameCount%50===0){
    for (var l=0; l<100;l++){
      drops.push(new Drops(random(0,400),random(0,400),5));
    }
    
  }

    
}

function draw(){
    background(0);
   

    Engine.update(engine);

      for(var l=0; l<100;l++){
        drops[l].display();
        drops[l].update();
      }
    
}   

