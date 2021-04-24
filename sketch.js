var garden, gardenImg;
var fighter, fighter1; 
var item1, item2, item3;

function preload(){
  gardenImg = loadImage("garden.png");
  fighter1 = loadImage("Fight Trick 2.png",              "Fight Trick 3.png");
  item1 = loadImage("download.png")
  item2 = loadImage("Orange autumn leaf.png")
  item3 = loadImage("Red autumn leaf 1.png")
}

function setup(){
  createCanvas(400,400);
  
// Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);
  
  fighter = createSprite(200, 250, 20, 20);
  fighter.addImage("fighting", fighter1);
  fighter.scale = 0.6


}
function draw() {
  background(0);
  
  
  
   


  drawSprites();
}