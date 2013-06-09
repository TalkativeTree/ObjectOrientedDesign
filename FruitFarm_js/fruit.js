// //Object Literal
// var fruit = {
//   taste: "delicious",
//   status: "uneaten",

//   rot: function(){
//     this.status = "spoiled"
//   },//make sure to remember your ','s
// }

//Contructor & prototype
function Fruit (name){
  this.name = name;
  this.status = "fresh";
}

Fruit.prototype.rot = function(){
  this.status = "spoiled";
};

//-----------------Fruit-----------------//
var apple = new Fruit ("apple");
var pear = new Fruit ("pear");
var orange = new Fruit ("pear");

//-----------------Fruit_Tree-----------------//

var stagesOfLife = {
  stage: ["seed", "sapling", "teen", "mature"]
}

function FruitTree (){

}

// var FruitTree = {
//   init: function(asd){
//     rings: 0;
//     this.status: "heatly"
//     var fruit = [];
//   }
// }

//-----------------Grove------------------//

function Grove (){

}

//-----------------Farm-------------------//

function Farm (kind) {
  this.crops = [],
  this.kind = kind
}

//-----------------Farmer-----------------//

function Farmer(name){
  this.name = name;
  this.farms = [];
};

Farmer.prototype.buyFarm = function(kind){
  var newFarm  = new Farm(kind);
  this.farms.push(newFarm);
};

var ben = new Farmer("Ben")


//-----------------controllers-----------------//
//$(function){
  ben.buyFarm(new Grove);
  console.log(ben.farms);
  ben.plant("orange", 3);
  console.log(bensFarm.totalCrop() === 3);
  ben.plant("apple", 4);
  console.log(bensFarm.totalCrop()  === 7);
  ben.plant("pear", 4);
  console.log(bensFarm.totalCrop() === 11);
  for(var i = 0; i < 10; i++) {
    ben.tendCrops();
  }; //http://www.w3schools.com/js/js_loop_for.asp
  ben.collectHarvest();
  console.log(farmer.harvestSize() === farmer.totalCrops());

  ben.describeHarvestYield();
  // "I harvested X oranges. I harvested X apples. I harvested X pears."
  ben.describeFarm();
  // "I have X orange trees, X pear trees, and X apple trees"
// }



