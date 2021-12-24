const fs = require("fs");

let basinMap = [];

function countBasinSize(map, index, counter, sizeArray) {
  map[index[0]][index[1]] = 0;
  if (!sizeArray[counter]) sizeArray[counter] = 1;
  else sizeArray[counter]++;

  if (map[index[0] - 1] && map[index[0] - 1][index[1]])
    countBasinSize(map, [index[0] - 1, index[1]], counter, sizeArray);
  if (map[index[0] + 1] && map[index[0] + 1][index[1]])
    countBasinSize(map, [index[0] + 1, index[1]], counter, sizeArray);
  if (map[index[0]] && map[index[0]][index[1] - 1])
    countBasinSize(map, [index[0], index[1] - 1], counter, sizeArray);
  if (map[index[0]] && map[index[0]][index[1] + 1])
    countBasinSize(map, [index[0], index[1] + 1], counter, sizeArray);
}

function expandBasin(arr, index) {
  if (
    index[0] > 0 &&
    arr[index[0] - 1][index[1]] !== 9 &&
    !basinMap[index[0] - 1][index[1]]
  ) {
    basinMap[index[0] - 1][index[1]] = 1;
    expandBasin(arr, [index[0] - 1, index[1]]);
  }
  if (
    index[0] < arr.length - 1 &&
    arr[index[0] + 1][index[1]] !== 9 &&
    !basinMap[index[0] + 1][index[1]]
  ) {
    basinMap[index[0] + 1][index[1]] = 1;
    expandBasin(arr, [index[0] + 1, index[1]]);
  }
  if (
    index[1] > 0 &&
    arr[index[0]][index[1] - 1] !== 9 &&
    !basinMap[index[0]][index[1] - 1]
  ) {
    basinMap[index[0]][index[1] - 1] = 1;
    expandBasin(arr, [index[0], index[1] - 1]);
  }
  if (
    index[1] < arr[index[0]].length - 1 &&
    arr[index[0]][index[1] + 1] !== 9 &&
    !basinMap[index[0]][index[1] + 1]
  ) {
    basinMap[index[0]][index[1] + 1] = 1;
    expandBasin(arr, [index[0], index[1] + 1]);
  }
}

fs.readFile(
  "/Users/dylancancelliere/advent-of-code-2021/9/9.txt",
  "utf8",
  (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    data = data.split("\n");
    for (let i = 0; i < data.length; i++) {
      data[i] = data[i].split("");
    }
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].length; j++) {
        data[i][j] = parseInt(data[i][j]);
      }
    }
    let coords = [];
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].length; j++) {
        let findMin = [];
        if (i > 0) findMin.push(data[i - 1][j]);
        if (i < data.length - 1) findMin.push(data[i + 1][j]);
        if (j > 0) findMin.push(data[i][j - 1]);
        if (j < data[i].length - 1) findMin.push(data[i][j + 1]);

        let check = false;
        findMin.forEach((val) => {
          if (val <= data[i][j]) check = true;
        });
        if (!check) coords.push([i, j]);
      }
    }

    for (let row = 0; row < data.length; row++) {
      basinMap.push(new Array(data[row].length).fill(0));
    }
    let check = true;
    while (check === true) {
      check = false;
      let before = [...basinMap];
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
          if (data[i][j] != 9) {
            expandBasin(data, [i, j]);
          }
        }
      }
      for (let i = 0; i < basinMap.length; i++) {
        for (let j = 0; j < basinMap[i].length; j++) {
          if (basinMap[i][j] != before[i][j]) {
            check = true;
            break;
          }
        }
      }
    }
    let arr = [],
      counter = 0;
    for (let i = 0; i < basinMap.length; i++) {
      for (let j = 0; j < basinMap[i].length; j++) {
        if (basinMap[i][j] == 1) {
          countBasinSize(basinMap, [i, j], counter++, arr);
        }
      }
    }

    arr = arr.sort((a, b) => {
      return a - b;
    });
    console.log(
      arr[arr.length - 1] * arr[arr.length - 2] * arr[arr.length - 3]
    );
  }
);
