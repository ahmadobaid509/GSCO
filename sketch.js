var car,wall;

var speed,weight;
var deformation;

function setup() {
  createCanvas(1000,800);

  car=createSprite(100, 400, 100, 50);
  car.shapeColor="white";

  wall=createSprite(900, 400, 100, 800);
  wall.shapeColor="grey";
  
  speed=random(55,90);
  weight=random(400,1500);

  car.velocityX=speed;
}

function draw() {
  background("black");
  
  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocityX=0;
    deformation= (0.5*weight*speed*speed)/22509;
    if(deformation>180)
    {
      car.shapeColor="red";
    }
    if (deformation<180 && deformation >100)
    {
      car.shapeColor="yellow";
    }
    if (deformation<100)
   
    {
      car.shapeColor="green";
    }

    }
  
  drawSprites();
  fill ("white");
  textSize(25);
  text ("Deformation = " + deformation, 200,50);
}