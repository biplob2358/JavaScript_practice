var obj = {
  x: 30,
  y: 40,
  z: 50,
};
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

var obj2 = Object.assign({}, obj);
obj2.x = 100;
console.log(obj);
console.log(obj2);
