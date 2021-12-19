const fs = require("fs");

fs.readFile(
  "/Users/dylancancelliere/advent-of-code-2021/6/6.txt",
  "utf8",
  (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    data = data.split(",");
    for (let i = 0; i < data.length; i++) {
      data[i] = parseInt(data[i]);
    }
    // let next = [];
    // for (let counter = 0; counter < 256; counter++) {
    //   //   console.log("Counter: " + counter);
    //   let len = data.length;
    //   for (let i = 0; i < len; i++) {
    //     if (data[i] === 0) {
    //       data[i] = 6;
    //       data.push(8);
    //     } else {
    //       data[i] = data[i] - 1;
    //     }
    //   }
    // }
    let arr = Array(9).fill(0);
    //Init
    data.forEach((x) => {
      arr[x]++;
    });
    let next = Array(9);
    for (let counter = 0; counter < 256; counter++) {
      for (let i = 0; i < arr.length - 1; i++) {
        next[i] = arr[i + 1];
      }
      next[8] = arr[0];
      next[6] += arr[0];
      arr = [...next];
    }

    let sum = 0;
    arr.forEach((x) => {
      sum += x;
    });
    console.log(sum);
  }
);
