const fs = require("fs");

function decode(decodedVals, letters) {
  let temp = [...letters].sort().join("");
  for (let i = 0; i < decodedVals.length; i++) {
    let encoding = [...decodedVals[i]].sort().join("");
    if (encoding == temp) return i;
  }
  console.log("ERROR");
  return -1;
}

fs.readFile(
  "/Users/dylancancelliere/advent-of-code-2021/8/8.txt",
  "utf8",
  (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    data = data.split("\n");
    let sum = 0;
    data.forEach((input) => {
      let vals = [];
      let unknowns = [];
      input = input.split(" | ");
      let x = input[0].split(" ");
      x.forEach((y) => {
        if (y.length === 2) vals[1] = y;
        else if (y.length === 4) vals[4] = y;
        else if (y.length === 3) vals[7] = y;
        else if (y.length === 7) vals[8] = y;
        else if (!unknowns.includes(y)) unknowns.push(y);
      });

      while (unknowns.length !== 0) {
        for (let i = 0; i < unknowns.length; i++) {
          let unknown = unknowns[i];
          if (unknown.length === 5) {
            if (unknown.includes(vals[1][0]) && unknown.includes(vals[1][1])) {
              vals[3] = unknown;
              let index = unknowns.indexOf(unknown);
              unknowns.splice(index, 1);
              break;
            } else if (vals[6]) {
              let count = 0;
              [...unknown].forEach((letter) => {
                if (vals[6].includes(letter)) count++;
              });
              if (count == 5) vals[5] = unknown;
              else vals[2] = unknown;
              let index = unknowns.indexOf(unknown);
              unknowns.splice(index, 1);
              break;
            }
          } else if (unknown.length === 6) {
            let count1 = 0,
              count4 = 0;
            [...unknown].forEach((letter) => {
              if (vals[1].includes(letter)) count1++;
              if (vals[4].includes(letter)) count4++;
            });
            if (count1 == 1) vals[6] = unknown;
            else if (count4 == 4) vals[9] = unknown;
            else vals[0] = unknown;
            let index = unknowns.indexOf(unknown);
            unknowns.splice(index, 1);
            break;
          }
        }
      }
      let output = input[1].split(" ");
      for (let i = 0; i < output.length; i++) {
        sum += decode(vals, output[output.length - i - 1]) * Math.pow(10, i);
      }
    });
    console.log(sum);
  }
);
