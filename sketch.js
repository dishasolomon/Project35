//Create variables here
var dog, happyDog;
var database;
var foodS, foodStock;
var feedDog, addFood;

function preload()
{

  database = firebase.database();

  //load images here
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}

function setup() {
	createCanvas(500, 500);
  dog.addImage(dog);
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();
  textSize(20);
  fill("blue");
  text("Press the UP_ARROW to feed Tim!",250,100);

}

//function to read values from DB
function readStock(data){
  foodS = data.val();
}

//function to write values in DB
function writeStock(x){
  if(x<=0){
    x = 0;
  }
  else{
    x = x-1;
  }

  database.ref('/').set({
    Food: x
  })
}

