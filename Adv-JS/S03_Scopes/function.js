function add() {
  var name = "";
  function f1() {
    // function scope
  }
  f1();
}

f1(); //Invalid

add(); // Valid
