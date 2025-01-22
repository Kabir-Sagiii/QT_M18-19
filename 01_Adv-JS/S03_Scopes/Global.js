var city = "hyderabad"; //Global Scope
let name = "raj"; //Global Scope
const pin = 123; //Global Scope

function f1() {
  // Global Scope
  var password = "1234"; //function scope
}

if (true) {
  //Global Scope
  let price = 1234; //block scope
}
