const fs = require("fs");

let max = 0;
fs.readFile(
  "/Users/dylancancelliere/advent-of-code-2021/5/5.txt",
  "utf8",
  (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    data = data.split("\n");
    for (let i = 0; i < data.length; i++) {
      temp = data[i].split(" -> ");
      left = temp[0].split(",");
      left[0] = parseInt(left[0]);
      left[1] = parseInt(left[1]);
      right = temp[1].split(",");
      right[0] = parseInt(right[0]);
      right[1] = parseInt(right[1]);
      max = Math.max(right[0], right[1], left[0], left[1], max);
    }
    max++;
    findCollisions(data);
  }
);

function findCollisions(data) {
  let arr = [];
  for (let i = 0; i < max; i++) {
    arr.push(new Array(max).fill(0));
  }
  let temp, left, right;
  for (let i = 0; i < data.length; i++) {
    temp = data[i].split(" -> ");
    left = temp[0].split(",");
    left[0] = parseInt(left[0]);
    left[1] = parseInt(left[1]);
    right = temp[1].split(",");
    right[0] = parseInt(right[0]);
    right[1] = parseInt(right[1]);
    if (left[0] == right[0]) {
      for (
        let j = Math.min(left[1], right[1]);
        j <= Math.max(left[1], right[1]);
        j++
      ) {
        arr[j][left[0]]++;
      }
    } else if (left[1] == right[1]) {
      for (
        let j = Math.min(left[0], right[0]);
        j <= Math.max(left[0], right[0]);
        j++
      ) {
        arr[left[1]][j]++;
      }
    } else {
      let leftToRightX = left[0] > right[0] ? -1 : 1;
      let leftToRightY = left[1] > right[1] ? -1 : 1;
      for (
        let x = left[0], y = left[1];
        Math.abs(x - right[0]) > 0, Math.abs(y - right[1]) > 0;
        x += leftToRightX, y += leftToRightY
      ) {
        arr[y][x]++;
      }
      arr[right[1]][right[0]]++;
    }
  }
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] >= 2) {
        count++;
      }
    }
  }
  console.log(count);
}
