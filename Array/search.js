var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var find = 1;
var isFound = false;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] == find) {
    console.log("Data Found in " + i);
    isFound = true;
    break;
  }
}

if (!isFound) {
  console.log("Data not Found");
}
