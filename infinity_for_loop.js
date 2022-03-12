for (;;) {
  var rand = Math.floor(Math.random() * 10 + 1);
  if (rand == 9) {
    console.log("Yeah You win!");
    break;
  } else {
    console.log("You have got " + rand);
  }
}
