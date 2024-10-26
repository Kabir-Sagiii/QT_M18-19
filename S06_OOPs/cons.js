class User {
  name;
  age;
  static city;

  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.city = "Hyderabad";
  }
}

var user1 = new User("Raj", 29);
console.log(user1);

var user2 = new User("Sneha", 25);
console.log(user2);

var user3 = new User("xyz", 21);
console.log(user3);
