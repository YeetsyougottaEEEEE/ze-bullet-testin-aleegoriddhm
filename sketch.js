var wall, bullet;
var thiccc, speed, weight;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  thiccc=random(22,83);

  wall=createSprite=(1200,200,thiccc,height/2);

  speed=random(223,321);

  weight=random(30,52);

  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  
  if(hascollided(bullet,wall)){
    bullet.velocityX=0
    var nowthatsallotadamage=0.5*weight*speed*speed/(thiccc*thiccc*thiccc);

  }

  if(nowthatsallotadamage>10){
    wall.shapeColor=(225,0,0);
  }

  f(nowthatsallotadamage<10){
    wall.shapeColor=(0,225,0);
  }


  drawSprites();
}

function hascollided(bullet,wall){
 bulletRightEdge=1bullet.x+1bullet.width;
 wallLeftEdge=1wall.x;
 if(bulletRightEdge>=wallLeftEdge){
   return true
 }

  return false;

  
}