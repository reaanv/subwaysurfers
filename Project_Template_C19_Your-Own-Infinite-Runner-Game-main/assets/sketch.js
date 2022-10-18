var path,Jake
var pathImg,JakeImg,coin1Img,coin5Img,coin20Img,Img;
var treasureCollection = 0;
var coin1G,coin5G,coin20G,trainGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  JakeImg = loadAnimation("Runner-1.png","Runner-2.png");
 coin1Img = loadImage("coin1.png");
  coin5Img = loadImage("coin5.png");
  coin20Img = loadImage("coin20.png");
  trainImg = loadImage("train.png");
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
//create a canvas

// createCanvas(window,window);
createCanvas(windowWidth,windowHeight);
// createCanvas(width,height);
// createCanvas(200,200);

// Moving background

path=createSprite(width/2,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
Jake = createSprite(width/2,height-20,20,20);
Jake.addAnimation("SahilRunning",boyImg);
Jake.scale=0.08;
  
  
coin1G=new Group();
coin5G=new Group();
coin20G=new Group();
trainGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  Jake.x = World.mouseX;
  
  edges= createEdgeSprites();
  Jake.collide(edges);
  
  //code to reset the background

  // if(path.x > height ){
   // path.x = height/2;
  // }
  if(path.y > height ){
     path.y = height/2;
   }

  // if(path.x > height ){
  //   path.y = height;
  // }

  // if(path.y > height ){
  //   path.y = height/2;
  // }
  
    createcoin1();
    createcoin5();
    createcoin20();
    createtrain();

    if (coin1G.isTouching(boy)) {
      coin1G.destroyEach();
      treasureCollection=treasureCollection + 5;
    }
    else if (coin5G.isTouching(boy)) {
      coin5G.destroyEach();
      treasureCollection=treasureCollection + 20;
      
    }else if(coin20G.isTouching(boy)) {
      coin20G.destroyEach();
      treasureCollection= treasureCollection + 100;
      
    }else{
      if(trainGroup.isTouching(Jake)) {
        gameState=END;
        
        Jake.addAnimation("SahilRunning",endImg);
        Jake.x=width/2;
        Jake.y=height/2;
        
        coin1G.destroyEach();
        coin5G.destroyEach();
        coin20G.destroyEach();
        trainGroup.destroyEach();
        
        coin1G.setVelocityYEach(0);
        coin5G.setVelocityYEach(0);
        coin20G.setVelocityYEach(0);
        trainGroup.setVelocityYEach(0);
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,width-150,30);
  }

}

function createcoin1() {
  if (World.frameCount % 200 == 0) {
  var coin1 = createSprite(Math.round(random(50, width-50),40, 10, 10));
  coin1.addImage(coin1Img);
  coin1.scale=0.12;
coin1.velocityY = 5;
  coin1.lifetime = 200;
  coin1G.add(coin1);
  }
}

function createcoin5() {
  if (World.frameCount % 320 == 0) {
  var coin5 = createSprite(Math.round(random(50, width-50),40, 10, 10));
  coin5.addImage(coin5Img);
  coin5.scale=0.03;
  coin5.velocityY = 5;
  coin5.lifetime = 200;
  coin5G.add(coin5);
}
}

function createcoin20() {
  if (World.frameCount % 410 == 0) {
  var coin20 = createSprite(Math.round(random(50, width-50),40, 10, 10));
  coin20.addImage(jwelleryImg);
  coin20.scale=0.13;
  coin20.velocityY = 5;
  coin20.lifetime = 200;
  coin20G.add(coin20);
  }
}

function createtrain(){
  if (World.frameCount % 530 == 0) {
  var train = createSprite(Math.round(random(50, width-50),40, 10, 10));
  train.addImage(trainImg);
  train.scale=0.1;
  train.velocityY = 4;
  train.lifetime = 200;
  trainGroup.add(train);
  }
}