function myArray() {
  return [
    "xyz",
    function fn() {
      console.log("fn is called");
    },
  ];
}

var data = myArray();
//data = ["xyz",fn]
console.log(data[1]);
data[1]();
