//-----------------Fruit----------------------//

//-----------------Fruit_Tree-----------------//


//-----------------Farm----------------------//


//-----------------Farmer--------------------//


//-----------------driver code---------------//


var ben = new Farmer("Ben")
ben.buyFarm("Grove");
ben.plant(new FruitTree, "orange", 3);
//  console.log(ben.farm.crops);
//  console.log("total crop");
console.log(ben.countCrop() === 3);
ben.plant(new FruitTree, "apple", 4);
console.log(ben.countCrop() === 7);
ben.plant(new FruitTree, "pear", 4);
console.log(ben.countCrop() === 11);
ben.waterCrops();
//console.log(ben);
var harvest = {
  bounty: ben.collectHarvest(),
};
console.log(harvest.bounty) === console.log(["orange", "orange", "orange", "apple", "apple", "apple", "apple", "pear", "pear", "pear", "pear"]);
//to undertand why I am console logging them both, here is a good discussion on equality in javascript http://stackoverflow.com/questions/7314635/why-isnt-1-2-3-equal-to-itself-in-javascript
