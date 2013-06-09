// //Object Literal
// var fruit = {
//   taste: "delicious",
//   status: "uneaten",

//   rot: function(){
//     this.status = "spoiled"
//   },//make sure to remember your ','s
// }

//Contructor & prototype
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
};

function FruitTree (){

};

function appleTree (){
  this.fruit = "apple"
};
function pearTree (){
  this.fruit = "pear"
};
function orangeTree (){
  this.fruit = "orange"
};


//-----------------Grove-------------------//
/*
function Grove (){
  this.plants = []
}
*/

Grove.prototype = new Farm();

//-----------------Farm-------------------//
//-----------------Farm-------------------//
//-----------------Farm-------------------//

function Farm (kind) {
  this.crops = [];
  this.kind = kind;
}

Farm.prototype.add = function(newCrop) {
  this.crops.push(newCrop);
}

Farm.prototype.totalCrops = function(){
//  console.log(this.crops.length);
//  this.crops.length;
  return this.crops.length;
}

Farm.prototype.grow = function(){
//  console.log(this);
//  for(var i = 0; i < this.totalCrops; i++){
//  console.log("hi");
for(var i = 0; i < this.totalCrops; i++){
  this.crops[i].age();
  };
};

Farm.prototype.yieldBounty = function(){
  var bounty = [];
  for(var i=0;i < this.crops.length;i++){
    bounty.push(this.crops[i].fruit);
  }
//  console.log(bounty);
  return bounty;

}
//-----------------Farmer-----------------//
//-----------------Farmer-----------------//
//-----------------Farmer-----------------//

function Farmer(name){
  this.name = name;
  // this.farms = [];
};



Farmer.prototype.buyFarm = function(kind){
  this.farm  = new Farm(kind);
};


Farmer.prototype.plant = function(plant,number){
  for(var i = 0;i < number;i++){
//  console.log(this.farm);
    this.farm.add(plant);
//  console.log(this.farm);
  };
};

Farmer.prototype.countCrop = function(){
//  console.log(this.farm.totalCrop());
//  this.farm.totalCrop()
  return this.farm.totalCrops();
}

Farmer.prototype.waterCrops = function(){
  ben.farm.grow();
}



Farmer.prototype.collectHarvest = function(){
//  for(i=0;i<11;i++){
//  console.log(ben.farm.crops[i].kind);
//  ben.basket.push(ben.farm.yieldBounty());
//  console.log(ben.farm.yieldBounty());
//  };
  return ben.farm.yieldBounty();
}
//
//-----------------efficient prototyping-----------------//
//-----------------efficient prototyping-----------------//
// Farmer.prototype = {
//   buyFarm: function(kind){
//     this.farm = new Farm(kind);
//   },

//   plant: function(plant,number){

//     for(var i = 0;i < number;i++){
//       this.farm.add(plant);
//     };
//   },

//   countCrop: function(){
//     return this.farm.totalCrops();
//   },

//   waterCrops: function(){
//     this.farm.grow();
//   },

//   collectHarvest: function(){
//     return ben.farm.yieldBounty();
//   }
// }

//----------Oject Literal Farmer---------------//

// var Farmer  = {
//   init: function(kind){
//     this.kind = kind;
//     this.template = '<div class = "' + this.kind + '">' + this.kind + ' Farm</div>'
//   },
//   buyFarm: function(){
//     this.farm = Farm;
//     console.log(this.farm);
//   },

//   plant: function(plant,kind,number){

//     for(var i = 0;i < number;i++){
//       var newCrop = plant;
//       newCrop.kind = kind;
//       this.farm.add(newCrop);
//     };
//   },

//   countCrop: function(){
//     var total = this.farm.totalCrops();
//     return total
//   },

//   waterCrops: function(){
//     this.farm.grow();
//   },

//   collectHarvest: function(){
//     var basket = ben.farm.yieldBounty();
//     return basket;
//   }
// }


//-----------------controllers-----------------//
//$(function){
var ben = new Farmer("Ben")
ben.buyFarm("Grove");
bensFarm = ben.farm;
//  console.log(bensFarm.kind);
ben.plant(new orangeTree, 3);
//  console.log(bensFarm.crops);
//  console.log(ben.farm.crops);
//  bensNewFarm = ben.farm;
//  console.log("total crop");
console.log(ben.countCrop() === 3);
ben.plant(new appleTree, 4);
console.log(ben.countCrop() === 7);
ben.plant(new pearTree, 4);
console.log(ben.countCrop() === 11);
//  for(var i = 0; i < 10; i++) {
ben.waterCrops();
//  };
//console.log(ben);
var harvest = {
  bounty: ben.collectHarvest(),
  bountyType: function(){

  },
};
console.log(harvest.bounty.toString() === ["orange", "orange", "orange", "apple", "apple", "apple", "apple", "pear", "pear", "pear", "pear"].toString());

console.log(harvest)


//   console.log(farmer.harvestSize() === farmer.totalCrops());

//   ben.describeHarvestYield();
//   // "I harvested X oranges. I harvested X apples. I harvested X pears."
//   ben.describeFarm();
//   // "I have X orange trees, X pear trees, and X apple trees"
// // }



