var obj1 = {
  name: "sagar",
  city: "Delhi",
  gender: "male",
};

var obj2 = {
  email: "Sagar@gmail.com",
  ...obj1,
  phn: 999999999,
  name: "Siddharath",
};

// console.log(obj1);
// console.log("----------------------");
// console.log(obj2);

var arr1 = [10, 20, 30, 40];

var arr2 = ["cdsljk", ...arr1, true, false];

console.log(arr1);
console.log("----------------------");
console.log(arr2);
