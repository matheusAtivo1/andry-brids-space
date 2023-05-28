const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var cenarioImg,cenario;
var plataforma,plataformaImg,plataformaImg2,plataformaImg3,pig,pigImg;
var force = 10;
function preload() {
  
  cenarioImg=loadImage("space.jpg");
  plataformaImg = loadImage("estilingue.jpg");
  plataforma2Img = loadImage("angry-birds.png");
  pigImg = loadImage("pig.png");
}

function setup() {
  createCanvas(1000,600);
  
  engine = Engine.create();
  world = engine.world;
  plataforma = Bodies.rectangle(80,400, 180, 150,options);
  World.add(world, plataforma);
  pig = Bodies.rectangle(800,200, 180, 150,options);
  World.add(world, plataforma);
   var options = {
    //isStatic: true,
   //restitution:1,
   //friction:1,
   //density:1.2,
   isStatic:false
   }
   Engine.run(engine);
}


function draw() 
{background(cenarioImg);
  image(plataformaImg,20,400,150,180);
  //image(plataforma2Img,plataforma.x,plataforma.y,60,60);
  //rect(plataforma.position.x,plataforma.position.y,180,150);
  //rect(pig.position.x,pig.position.y,180,180);
  image(plataforma2Img,plataforma.position.x,plataforma.position.y,60,60);
  image(pigImg,pig.position.x,pig.position.y,60,60);
  rectMode(CENTER);
//80,400

  Engine.update(engine);
  Matter.Body.applyForce(plataforma,{x:0,y:0},{x:0,y:-0.10826});
  Matter.Body.applyForce(pig,{x:0,y:0},{x:0,y:-0.10826});
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(plataforma,{x:0,y:0},{x:0.06,y:-0.02});
    }
 
}

