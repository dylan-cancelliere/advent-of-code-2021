const fs = require("fs");

fs.readFile("/Users/dylancancelliere/aoc/1/1.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let arr = data.split("\n");
  let counter = 0;
  for (let i = 3; i < arr.length; i++) {
    let temp = parseInt(arr[i]) + parseInt(arr[i - 1]) + parseInt(arr[i - 2]);
    let temp2 =
      parseInt(arr[i - 3]) + parseInt(arr[i - 1]) + parseInt(arr[i - 2]);
    if (temp > temp2) counter++;
  }
  console.log(counter);
});
