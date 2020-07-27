const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// let input = [];
// let max;
rl.on("line", function (line) {
  solution(line);
  // input.push(line);
}).on("close", function () {
  // solution(input);
  process.exit();
});

const asciiNumberMinus = (w) => {
  const MINUS = 97;
  return w.charCodeAt() - MINUS;
};

const solution = (word) => {
  const answer = Array(26)
    .fill(null)
    .map((v) => -1);
  // console.log(answer);

  for (let idx = 0; idx < word.length; idx++) {
    const position = asciiNumberMinus(word[idx]);
    if (answer[position] === -1) answer[position] = idx;
  }
  return console.log(answer.join(" "));
};
//a97 ~ z122
//26개
//0~25
