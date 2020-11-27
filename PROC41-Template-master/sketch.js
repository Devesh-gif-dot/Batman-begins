const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var man,manImg;
var engine,world;

var thunder,thunderImg;

var drops = [];

function preload(){
    manImg = loadAnimation("images/walking/walking_1.png","images/walking/walking_2.png","images/walking/walking_3.png","images/walking/walking_4.png","images/walking/walking_5.png","images/walking/walking_6.png","images/walking/walking_7.png","images/walking/walking_8.png",);
    thunderImg = loadAnimation("images/thunderbolt/1.png","images/thunderbolt/2.png","images/thunderbolt/3.png","images/thunderbolt/4.png");
}

function setup(){
  createCanvas(400,800);

  engine = Engine.create();
  world = engine.world;

  man = createSprite(200,600,50,50);
  man.addAnimation("manImg",manImg);
  man.scale = 0.3; 



  Engine.run(engine);
    
}

function draw(){
    background("black");
    var maxdrops = 150;
    for(var i=0;i<maxdrops;i=i+1){
            drops.push(new Drops(random(20,380),random(-100,50)));
        }
    
    for(var j = 0; j< maxdrops; j=j+1){
            drops[j].display();
        }
    
    Thunder();
    console.log(thunder);
    

    drawSprites();
}   

function Thunder(){
    if(frameCount%10===0){
    thunder = createSprite(random(50,300),0,50,50);
    thunder.addAnimation("thunderImg",thunderImg);
    thunder.lifetime = 10;
    }
}
