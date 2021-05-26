var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1=createSprite (100, 580, 190, 20)
    block2= createSprite(300, 580, 190, 20)
    block3= createSprite(500, 580, 190, 20)
    block4= createSprite(700, 580, 190, 20) 

    block1.shapeColor = "red"
    block2.shapeColor = "yellow"
    block3.shapeColor = "green"
    block4.shapeColor = "blue"

    //create box sprite and give velocity
    box=createSprite (random (20,750), 100, 15,15)
    box.shapeColor = "brown"
    box.velocityX = 8
    box.velocityY = 7

}

function draw() {
    background(rgb(169,169,169));

    //create edgeSprite
 edges= createEdgeSprites ()
 box.bounceOff (edges)
if (box.isTouching (block1)){
    box.shapeColor = "red"
box.velocityX = 0
box.velocityY = 0
music.stop ()
}
if (box.isTouching (block2)){
    box.shapeColor = "yellow"
    box.bounceOff (block2)
}
if (box.isTouching (block3)){
    box.shapeColor = "green"
    box.bounceOff (block3)
}
if (box.isTouching (block4)){
    box.shapeColor = "blue"
    box.bounceOff (block4)
}
   //add condition to check if box touching surface and make it box
    drawSprites ();
}
