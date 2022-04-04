function test() {
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
test(12, 20, 30);

//add all number

function addAll() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
}

addAll(2, 3, 4, 5, 6, 7);
