setTimeout(function () {
  console.log("Biplob Ghosh");
}, 5000);

//example

var addition = function (a, b) {
  return a + b;
};

var another = addition;
console.log(another(3, 3));
console.log(another(3, 9));
console.log(another(10, 9));
console.log(another(10, 70));
