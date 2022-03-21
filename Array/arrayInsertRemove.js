//Insert
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.push(10); //push in last index
console.log(arr);
arr.unshift(11); //add in first index
console.log(arr);

arr.splice(3, 0, 9); //insert 9 to index 3
console.log(arr);

//Remove
// arr[3] = null;
// arr.pop();
// arr.shift();
arr.splice(3, 1);
console.log(arr);
