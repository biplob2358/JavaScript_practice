function addAll() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum;
}

var result = addAll(2, 3, 4);
console.log(result);

//return object

function person(name, email) {
  return {
    name: name,
    email: email,
  };
}

var p1 = person("Biplob", "biplob2358@gmail.com");
console.log(p1);
