var dog,dogImage;
var doghImage;
var database,foods,foodstock;

function preload()
{
  dogImage=loadImage("images/dogImg.png");
  doghImage=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(250,300,150,150);
  dog.addImage(dogImage);
  dog.scale=0.2;
  foodstock=database.ref("Food");
  foodstock.on("value",readStock);
}


function draw() {  
background("lightgreen");
if(keyWentDown(UP_ARROW)){
writeStock(foods);
dog.addImage(doghImage);

}
  drawSprites();
  //add styles here
text("food remaining"+foods,170,200);
}
function readStock(data){
  foods=data.val();

}
function writeStock(x){
  if(x<=0){
    x=0;

  }
  else{
    x=x-1;

  }
  database.ref("/").update({
    Food:x
  })
}

