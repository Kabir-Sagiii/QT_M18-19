var city = "hyderabad";

function f1() {
  console.log(city);
}

function f2() {
  function innerFn() {
    console.log(city);
  }
}

f2();
console.log(city);
