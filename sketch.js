var wall
var bullet
var weight
var speed
var thickness
var damage

function setup() {
  createCanvas(800,400);
    speed = random(223,321)
  thickness = random(22,83)
  weight = random(30,52)
  bullet = createSprite(40,200,50,15)
  bullet.shapeColor = color(255,255,255)
  bullet.velocityX = speed

  wall = createSprite(600,200,thickness,height/2)
  damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness)

}

function draw() {
  background("black"); 
  
  if (bullet.x - wall.x < bullet.width/2 + wall.width/2 && 
    wall.x - bullet.x < bullet.width/2 + wall.width/2 &&
    wall.y - bullet.y < bullet.height/2 + wall.height/2 && 
    bullet.y - wall.y < bullet.height/2 + wall.height/2)
    {
      bullet.velocityX = 0;
    if (damage < 11) {
    wall.shapeColor = color(0,255,0)
    }else if(damage > 10){
      wall.shapeColor = color(255,0,0)
    }  
    }
  drawSprites();
}
