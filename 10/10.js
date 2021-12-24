const fs = require("fs");

fs.readFile(
  "/Users/dylancancelliere/advent-of-code-2021/10/10.txt",
  "utf8",
  (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    data = data.split("\n");

    let sum = 0;
    let scores = [];
    for (let i = 0; i < data.length; i++) {
      let line = data[i];
      let stack = [];
      let close;
      let isIncomplete = true;
      for (let j = 0; j < line.length; j++) {
        let char = line[j];
        if (char == "(") stack.push(3);
        else if (char == "[") stack.push(57);
        else if (char == "{") stack.push(1197);
        else if (char == "<") stack.push(25137);
        else if (char == ")") {
          close = stack.pop();
          if (close != 3) {
            sum += 3;
            isIncomplete = false;
            break;
          }
        } else if (char == "]") {
          close = stack.pop();
          if (close != 57) {
            sum += 57;
            isIncomplete = false;
            break;
          }
        } else if (char == "}") {
          close = stack.pop();
          if (close != 1197) {
            sum += 1197;
            isIncomplete = false;
            break;
          }
        } else if (char == ">") {
          close = stack.pop();
          if (close != 25137) {
            sum += 25137;
            isIncomplete = false;
            break;
          }
        }
      }

      if (isIncomplete) {
        let score = 0;
        for (let j = stack.length - 1; j >= 0; j--) {
          score = score * 5;
          if (stack[j] === 3) score += 1;
          else if (stack[j] == 57) score += 2;
          else if (stack[j] == 1197) score += 3;
          else if (stack[j] == 25137) score += 4;
        }
        scores.push(score);
      }
    }
    scores.sort((a, b) => {
      return a - b;
    });
    console.log(scores[Math.floor(scores.length / 2)]);
  }
);

// function convertChar(char) {
//   switch (char) {
//     case ")":
//       return 3;
//     case "]":
//       return 57;
//     case "}":
//       return 1197;
//     case ">":
//       return 25137;
//     default:
//       console.log("\nBad convertChar input: " + char + "\n");
//   }
// }
