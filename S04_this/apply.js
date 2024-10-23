var data = {
  pName: "Macbook",
  price: 94000,
};
function f1(x, y) {
  console.log(x, y);
  console.log(this);
}

// f1(10, 20);

f1.apply(data, [50, 50]);
