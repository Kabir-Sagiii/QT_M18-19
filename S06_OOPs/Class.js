class Products {
  productName = "Trimmer";
  price = 100;
  rating = 4.7;

  //   constructor() {} //Default

  display() {
    console.log(this.productName, this.price, this.rating);
  }

  changePrice(newPrice) {
    this.price = newPrice;
    this.display();
    return this.price;
  }
}

var p1 = new Products();
var p2 = new Products();

p2.productName = "Harddisk";
p2.price = 3500;
p2.rating = 4.3;

// p1.price = 400;
var newPrice = p1.changePrice(800);
console.log(newPrice);

p1.display();

p2.display();

class Users {
  name;
  city;

  print() {
    //
    //
    //
  }
}
