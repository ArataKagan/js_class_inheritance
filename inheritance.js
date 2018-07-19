###Questions

// What does "DRY" stand for? What does the "DRY principle" imply in programming
// or software development?

// A: It means `Don't Repeat Yourself` and it encourages to make a good use of
//abstraction as much as possible while coding and developing a product.
//For example, for the case of creating a class, by creating an independent
// function separate from a main constructor function, each instance is referenced
// by the function.

###Code

var Products = function(productName, brand, price){
this.productName = productName;
this.brand = brand || 'no brand';
this.price = price;
}

Products.prototype.getProductName = function getName(){
  console.log('I purchased ' + this.productName + '.');
}

Products.prototype.getBrand = function getBrand(){
  console.log('I got a product with ' + this.brand + '.');
}

Products.prototype.getPrice = function getPrice(){
  console.log('I purchased ' + this.productName + ' with '+ this.price + '.');

var tshirt = new Products('t-shirt','Zara','$30');
var beachSandal = new Products('beach sandal','','$30');

beachSandal.getBrand();
