class Personal {
  name = "raj";
  email = "raj@gmail.com";
  id = 101;
}

class Address extends Personal {
  city = "pune";
  state = "MH";
  pincode = "111111";
}

var ad1 = new Address();
console.log(ad1.city, ad1.state, ad1.pincode, ad1.name);
