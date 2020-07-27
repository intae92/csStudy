// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
// let max;
rl.on("line", function (line) {
  // sol(line);
  input.push(line);
  // rl.close();
}).on("close", function () {
  sol(input);
  process.exit();
});

const sol = (input) => {
  const caseCount = Number(input[0]);
  let countGroupWord = 0;

  for (let i = 1; i <= caseCount; i++) {
    const word = input[i];
    const letter = [];
    let isGroupWord = true;

    for (let j = 0; j < word.length; j++) {
      if (letter.indexOf(word[j]) === -1) {
        letter.push(word[j]);
      } else {
        console.log(letter, letter.indexOf(word[j]), letter.length - 1);

        if (letter.indexOf(word[j]) !== letter.length - 1) {
          isGroupWord = false;
          break;
        }
      }
    }

    if (isGroupWord) {
      countGroupWord += 1;
    }
  }

  console.log(countGroupWord);
};
