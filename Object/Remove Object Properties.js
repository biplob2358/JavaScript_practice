var obj = {
  a: 30,
  b: 40,
  c: 50,
};
obj.d = 60;
console.log(obj);

delete obj.d;
console.log(obj);

delete obj.a;
console.log(obj);
