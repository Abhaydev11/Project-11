 var ship,sea,edges;
 var shipImage;
 var seaImage;
 



  function preload()
  {
   shipImage=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
   seaImage = loadImage("sea.png")
   
  }

  
  
  
  function setup()
 {
  createCanvas(1365,625);
  
 
  
  edges=createEdgeSprites();
  
  sea = createSprite(200,180,400,20);
  sea.addImage(seaImage) 
  sea.velocityX=-6;  
 
  ship = createSprite(300,200,20,50)
  ship.addAnimation("moving",shipImage);
  ship.scale=0.4;


}

  function draw() 
 {
  background("blue");
  
 
  
  if(sea.x<0)
 {
   sea.x=sea.width/2;
 }

   

 console.log(ship.y)
 

 drawSprites();
 }