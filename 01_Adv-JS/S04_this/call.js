var obj1 = {
  name: "Sagar",
};

var obj2 = {
  name: "Riya Sharma",
};

function f1(x, y) {
  console.log(this);
}

f1.call(obj1, 10, 20);

f1.call(obj2, 50, 50);
