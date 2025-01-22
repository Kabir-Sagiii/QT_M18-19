function f1(...myPara) {
  console.log(myPara);
  myPara.forEach(function (element, index) {
    console.log(element);
  });
}

f1(100, "Good Afternoon", 10, 20, 30, 40, 50, "cdsjb", "ckdjsb");
