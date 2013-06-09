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
  init: function(asd){
    rings: 0;
    asd: "fuck you work js"
    this.fruit:  "sa";
  };
}


//-----------------Grove-----------------//

//-----------------Controller-----------------//


//-----------------View-----------------//
