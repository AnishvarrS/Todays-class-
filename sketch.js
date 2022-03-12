var bg,bgImg;
var player, Graphite2020Img, shooter_shooting;
var gameState = 0


function preload(){
  
  Graphite2020Img = loadImage("assets/My project.png")
  //shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/AncientWar.jpg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);
  game=new Game();
  form=new Form();
  form.display();


  

//creating the player sprite
   //player.debug = true
   //player.setCollider("rectangle",0,0,300,300)


}

function draw() {
  background("lightblue"); 
   if(gameState == 1){
     game.start()
   }

game.Play()
drawSprites();

}
