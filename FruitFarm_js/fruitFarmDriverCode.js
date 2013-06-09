//-----------------Fruit----------------------//

//-----------------Fruit_Tree-----------------//


//-----------------Farm----------------------//


//-----------------Farmer--------------------//


//-----------------driver code---------------//


var ben = new Farmer("Ben")
ben.buyFarm("Grove");
bensFarm = ben.farm;
//  console.log(bensFarm.kind);
ben.plant(new FruitTree, "orange", 3);
//  console.log(bensFarm.crops);
//  console.log(ben.farm.crops);
//  bensNewFarm = ben.farm;
//  console.log("total crop");
console.log(ben.countCrop() === 3);
ben.plant(new FruitTree, "apple", 4);
console.log(ben.countCrop() === 7);
ben.plant(new FruitTree, "pear", 4);
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
console.log(harvest);
