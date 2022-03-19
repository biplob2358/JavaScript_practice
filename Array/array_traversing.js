var arr = [10, 13, 12, 66, 33, 23, 45, 47];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
  arr[i] = arr[i] + 2; //add 2 every element
  console.log(arr[i]);

  sum = sum + arr[i]; //sum of every element

  //Find Even number
  if (arr[i] % 2 == 0) {
    console.log(arr[i], " is even number");
  } else {
    console.log(arr[i], " is odd number");
  }
}
console.log("Sum: ", sum);
