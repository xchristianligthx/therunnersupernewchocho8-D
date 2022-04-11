
//junte 3 proyectos, el de los globitos, y el de corredor, y el de el arco,
// mas el de t rex, puse las imagenes correctas, elimine lo que debia eliminar, y me deje de complicar la vida :D 
//por cierto el plus esta en que cuando precionas espacio salen monedas ;)
var ground, invisibleGround, groundImage;
var trex, trex_running, trex_collided;

var bow , arrow,  scene;
var bowImage,arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage,backgroundImage ;
var select_balloon=1
var score=0;


//bowruning = loadAnimation("jake1.png", "jake2.png", "jake3.png" ,"jake4.PNG" ,"jake5.png");

  
function preload(){
  
  backgroundImage = loadImage("path.png");
  arrowImage = loadImage("coin.png");
  bowImage = loadImage("coin.png");
  red_balloonImage = loadImage("bomb.png");
  green_balloonImage = loadImage("coin.png");
  pink_balloonImage = loadImage("bomb.png");
  blue_balloonImage = loadImage("bomb.png");
  
  groundImage = loadImage("path.png")

  trex_running = loadAnimation("jake1.png", "jake2.png", "jake3.png" ,"jake4.PNG","jake5.png");


 trex_collided = loadImage("jake1.png");

  
}



function setup() {
  createCanvas(400, 400);
  
  //crear fondo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  //crear arco para disparar las flechas
  bow = createSprite(200,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 0.1;
  
trex = createSprite(200,350,20,50);
trex.addAnimation("running", trex_running);
trex.scale = 1.0;
score = 0  
}

     
//}

function draw() {
 background(0);
  // mover el suelo
    scene.velocityY = -3 
trex.y=World.mouseY;
    if (scene.y < 0){
      scene.y = scene.width/2;
    }
  
  //mover arco
  bow.y = World.mouseY
  
   //liberar las flechas al presionar la barra espaciadora 
  if (keyDown("space")) {
    createArrow();
    
  }
   
  //Descomenta la opción correcta para obtener un número aleatorio entre 1 y 4 
  // select_balloon = Math.round(random(1,4));
   select_balloon = random(1,4);
   // select_balloon = Math.round(random());
   // select_balloon = Math.round(random(1,4,2));
  
   if (World.frameCount % 100 == 0) {

    //Descomenta la sentencia switch correcta

           switch(select_balloon ){
             case 1: redBalloon();
           case 2:blueBalloon();
           case 3:pinkBalloon();
             case 4:greenBalloon();
             default:break;
             }


            switch(select_balloon ){
             case 1: redBalloon();
             break;
             case 2:blueBalloon();
             break;
             case 3:pinkBalloon();
             break;
             case 4:greenBalloon();
             break;
            default:break;
           }


            switch (select_balloon ){
            case 1: redBalloon();
             break;
             case 1:blueBalloon();
            break;
            case 1:pinkBalloon();
            break;
            case 1:greenBalloon();
             break;
             default:break;
            }

}
    
  drawSprites();
}


//Crear flechas para el arco
 function createArrow() {
  var arrow= createSprite(200, 200, 60, 10);
  arrow.addImage(arrowImage);
  arrow.y = 360;
  arrow.y=bow.y;
  arrow.velocityY = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}

//function redBalloon() {
//  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
 // red.addImage(red_balloonImage);
 // red.velocityX = 3;
  //red.lifetime = 150;
  //red.scale = 0.1;
//}

//function blueBalloon() {
//  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
//  blue.addImage(blue_balloonImage);
 // blue.velocityX = 3;
 // blue.lifetime = 150;
//  blue.scale = 0.1;
//}

//function greenBalloon() {
 // var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
 // green.addImage(green_balloonImage);
 // green.velocityX = 3;
  //green.lifetime = 150;
  //green.scale = 0.1;
//}

//function pinkBalloon() {
  //var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
 // pink.addImage(pink_balloonImage);
 // pink.velocityX = 3;
  //pink.lifetime = 150;
  //pink.scale = 1
//}
