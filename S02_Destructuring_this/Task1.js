var user = {
  name: {
    first: "Raj",
    last: "verma",
  },
  address: {
    city: {
      cityName: "Mumbai",
      pincode: 456789,
    },
  },
};

var {
  name: { first, last },
} = user;

var {
  address: {
    city: { cityName, pincode },
  },
} = user;

console.log(first, last, cityName, pincode);
