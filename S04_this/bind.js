var data = {
  pName: "Macbook",
  price: 94000,
};
function f1(x, y) {
  console.log(x, y);
  console.log(this);
}

var x = f1.bind(data, 30, 30);
x();
