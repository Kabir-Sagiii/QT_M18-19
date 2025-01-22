var obj1 = {
  pname: "Macbook",
  rating: {
    rate: 4.7,
    count: {
      men: 1234,
      women: 2345,
    },
  },
  price: 240000,
};

var {
  pname,
  rating: {
    count: { men, women },
  },
} = obj1;

console.log(men, women);
