const fs = require("fs");

fs.readFile(
  "/Users/dylancancelliere/advent-of-code-2021/3/3.txt",
  "utf8",
  (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    data = data.split("\n");

    let valid = [...data];

    let counter = 0;
    while (valid.length > 1) {
      let zeros = 0,
        ones = 0;
      for (let i = 0; i < valid.length; i++) {
        if (valid[i][counter] == "1") ones++;
        else zeros++;
      }
      let temp = [];
      if (zeros > ones) {
        for (let i = 0; i < valid.length; i++) {
          if (valid[i][counter] == "0") temp.push(valid[i]);
        }
      } else {
        for (let i = 0; i < valid.length; i++) {
          if (valid[i][counter] == "1") temp.push(valid[i]);
        }
      }
      valid = [...temp];
      counter++;
    }
    let oxygen = valid[0];

    valid = [...data];

    counter = 0;
    while (valid.length > 1) {
      let zeros = 0,
        ones = 0;
      for (let i = 0; i < valid.length; i++) {
        if (valid[i][counter] == "1") ones++;
        else zeros++;
      }
      let temp = [];
      if (zeros > ones) {
        for (let i = 0; i < valid.length; i++) {
          if (valid[i][counter] == "1") temp.push(valid[i]);
        }
      } else {
        for (let i = 0; i < valid.length; i++) {
          if (valid[i][counter] == "0") temp.push(valid[i]);
        }
      }
      valid = [...temp];
      counter++;
    }

    console.log(valid);
    console.log(oxygen);
    console.log(parseInt(valid[0], 2) * parseInt(oxygen, 2));

    for (let i = 0; i < data.length; i++) {
      if (data[i][11] == "1") ones[11]++;
      else zeros[11]++;
      if (data[i][10] == "1") ones[10]++;
      else zeros[10]++;
      if (data[i][9] == "1") ones[9]++;
      else zeros[9]++;
      if (data[i][8] == "1") ones[8]++;
      else zeros[8]++;
      if (data[i][7] == "1") ones[7]++;
      else zeros[7]++;
      if (data[i][6] == "1") ones[6]++;
      else zeros[6]++;
      if (data[i][5] == "1") ones[5]++;
      else zeros[5]++;
      if (data[i][4] == "1") ones[4]++;
      else zeros[4]++;
      if (data[i][3] == "1") ones[3]++;
      else zeros[3]++;
      if (data[i][2] == "1") ones[2]++;
      else zeros[2]++;
      if (data[i][1] == "1") ones[1]++;
      else zeros[1]++;
      if (data[i][0] == "1") ones[0]++;
      else zeros[0]++;
    }
    let gamma = "",
      epsilon = "";
    if (ones[0] > zeros[0]) {
      gamma += "1";
      epsilon += "0";
    } else {
      gamma += "0";
      epsilon += "1";
    }
    if (ones[1] > zeros[1]) {
      gamma += "1";
      epsilon += "0";
    } else {
      gamma += "0";
      epsilon += "1";
    }
    if (ones[2] > zeros[2]) {
      gamma += "1";
      epsilon += "0";
    } else {
      gamma += "0";
      epsilon += "1";
    }
    if (ones[3] > zeros[3]) {
      gamma += "1";
      epsilon += "0";
    } else {
      gamma += "0";
      epsilon += "1";
    }
    if (ones[4] > zeros[4]) {
      gamma += "1";
      epsilon += "0";
    } else {
      gamma += "0";
      epsilon += "1";
    }
    if (ones[5] > zeros[5]) {
      gamma += "1";
      epsilon += "0";
    } else {
      gamma += "0";
      epsilon += "1";
    }
    if (ones[6] > zeros[6]) {
      gamma += "1";
      epsilon += "0";
    } else {
      gamma += "0";
      epsilon += "1";
    }
    if (ones[7] > zeros[7]) {
      gamma += "1";
      epsilon += "0";
    } else {
      gamma += "0";
      epsilon += "1";
    }
    if (ones[8] > zeros[8]) {
      gamma += "1";
      epsilon += "0";
    } else {
      gamma += "0";
      epsilon += "1";
    }
    if (ones[9] > zeros[9]) {
      gamma += "1";
      epsilon += "0";
    } else {
      gamma += "0";
      epsilon += "1";
    }
    if (ones[10] > zeros[10]) {
      gamma += "1";
      epsilon += "0";
    } else {
      gamma += "0";
      epsilon += "1";
    }
    if (ones[11] > zeros[11]) {
      gamma += "1";
      epsilon += "0";
    } else {
      gamma += "0";
      epsilon += "1";
    }
    console.log(parseInt(epsilon, 2) * parseInt(gamma, 2));
  }
);
