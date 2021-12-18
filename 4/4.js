const fs = require("fs");

const checkWinner = (picked) => {
  let winners = new Set();
  for (let i = 0; i < picked.length; i++) {
    let cols = [0, 0, 0, 0, 0];
    for (let j = 0; j < picked[i].length; j++) {
      let rows = 0;
      for (let k = 0; k < picked[i][j].length; k++) {
        if (picked[i][j][k] == 1) {
          rows++;
          cols[k]++;
        }
      }
      if (rows == 5) winners.add(i);
    }
    for (let j = 0; j < cols.length; j++) {
      if (cols[j] == 5) winners.add(i);
    }
  }
  return Array.from(winners);
};

const setPicked = (bingos, picked, val) => {
  let check = false;
  for (let i = 0; i < bingos.length; i++) {
    for (let j = 0; j < bingos[i].length; j++) {
      for (let k = 0; k < bingos[i][j].length; k++) {
        if (bingos[i][j][k] == val) {
          picked[i][j][k] = 1;
          check = true;
        }
      }
    }
  }
  if (check) {
    let win = checkWinner(picked);
    if (win.length != 0) return win;
  }
};

fs.readFile(
  "/Users/dylancancelliere/advent-of-code-2021/4/4.txt",
  "utf8",
  (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    data = data.replaceAll("  ", " ");
    data = data.split("\n");
    let nums = data[0].split(",");
    let bingos = [];

    for (let i = 1; i < data.length; i += 6) {
      let temp = [];
      for (let j = i + 1; j < i + 6; j++) {
        temp.push(data[j].trim().split(" "));
      }
      bingos.push(temp);
    }

    let picked = [];
    for (let i = 0; i < bingos.length; i++) {
      let temp = [];
      for (let j = 0; j < 5; j++) {
        temp[j] = new Array(5);
        temp[j].fill(0, 0, 6);
      }
      picked.push(temp);
    }

    for (let i = 0; i < nums.length; i++) {
      let win = setPicked(bingos, picked, nums[i]);
      if (win && win.length > 0) {
        if (bingos.length >= 2) {
          let tempB = [],
            tempP = [];
          for (let j = 0; j < bingos.length; j++) {
            if (!win.includes(j)) {
              tempB.push(bingos[j]);
              tempP.push(picked[j]);
            }
          }
          bingos = tempB;
          picked = tempP;
          continue;
        }

        let sum = 0;
        for (let j = 0; j < picked[win[0]].length; j++) {
          for (let k = 0; k < picked[win[0]][j].length; k++) {
            if (picked[win[0]][j][k] == 0) {
              sum += parseInt(bingos[win[0]][j][k]);
            }
          }
        }
        console.log(sum * parseInt(nums[i]));
        return;
      }
    }
  }
);
