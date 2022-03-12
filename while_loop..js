var i = 0;
while (i < 10) {
  console.log(i + 1 + " Biplob Ghosh");
  i++;
}

// Another example
var isRun = true;
while (isRun) {
  var rand = Math.floor(Math.random() * 10 + 1);
  if (rand == 9) {
    console.log("Yeah You win!");
    isRun = false;
  } else {
    console.log("You have got " + rand);
  }
}
