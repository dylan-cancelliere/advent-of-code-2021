const fs = require("fs");

fs.readFile(
  "/Users/dylancancelliere/advent-of-code-2021/7/7.txt",
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

    let max = Math.max(...data);
    let min = Number.MAX_SAFE_INTEGER;
    let result;
    for (let i = 0; i < max + 1; i++) {
      result = data.reduce((previousValue, currentValue) => {
        let diff = Math.abs(currentValue - i);
        return previousValue + (Math.pow(diff, 2) + diff) / 2;
      }, 0);
      min = Math.min(result, min);
    }
    console.log(min);
  }
);
