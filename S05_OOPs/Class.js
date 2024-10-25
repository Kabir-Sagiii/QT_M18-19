class User {
  name = "sagar";
  gender = "male";
  email = "sagar@gmail.com";

  display() {
    console.log("display is called");
  }
}

var obj1 = new User(); //obj1 = {display:function(){----}}
console.log(obj1.email);
obj1.display();

// 3 object = pName, price, category, rating
