const fs = require("fs");

fs.readFile(
  "/Users/dylancancelliere/advent-of-code-2021/2/2.txt",
  "utf8",
  (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    data = data.split("\n");
    let x = 0,
      y = 0,
      aim = 0;
    for (let i = 0; i < data.length; i++) {
      let temp = data[i].split(" ");
      if (temp[0] == "forward") {
        x += parseInt(temp[1]);
        y += parseInt(temp[1]) * aim;
      } else if (temp[0] == "down") aim += parseInt(temp[1]);
      else if (temp[0] == "up") aim -= parseInt(temp[1]);
    }
    console.log(x * y);
  }
);
