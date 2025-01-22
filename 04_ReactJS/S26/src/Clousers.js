function f1() {
  var x = 100;
  return function f2() {
    console.log(x);
  };
}

var x = f1();
x();
