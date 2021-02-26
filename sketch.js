var cat, catImg
var mouse, mouseImg


function preload() {
    //load the images here

    catImg = loadImage("cat1.png")

    catImg1 = loadAnimation("cat2.png","cat3.png")

    catImg2 = loadImage("cat4.png")
    

    gardenImg = loadImage("garden.png")

    mouseImg = loadImage("mouse1.png")

    mouseImg1 = loadAnimation("mouse2.png","mouse3.png")

    mouseImg2 = loadImage("mouse4.png")
    
  
  

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600)
    cat.addImage("Tom",catImg)
    cat.scale = 0.2

    mouse = createSprite(200,600)
    mouse.addImage("Jerry",mouseImg)
    mouse.scale = 0.15

    

}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x < (cat.width- mouse.width)/2){

        cat.velocityX = 0;
        cat.addAnimation("catMoving", catImg1)
        cat.x = 300
        cat.scale = 0.2
        cat.changeAnimation("catMoving")
        mouse.addAnimation("mouseMoving", mouseImg1)
        mouse.scale = 0.15
        mouse.changeAnimation("mouseMoving")
    }

    drawSprites();
}




function keyPressed(){
if(keyCode=== LEFT_ARROW){

    cat.velocityX = -4;
        cat.addAnimation("catRunning", catImg1)
        cat.x = 300


        mouse.addAnimation("mouseS", mouseImg1)
        mouse.frameDelay = 25
        mouse.changeAnimation("mouseS")


        
}
  //For moving and changing animation write code here


}
