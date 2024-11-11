class User {
  name;
  static city;

  constructor() {
    this.name = "xyz";
    User.city = "Bhopal";
  }

  changeName() {}

  static changeCity(newCity) {
    this.city = newCity;
    // this.display(); Invalid
  }

  display() {
    console.log(this.name, User.city);
  }
}

var u1 = new User();

u1.display();

User.changeCity("Gurgoan");

u1.display();
