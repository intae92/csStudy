const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// let input = [];
rl.on("line", function (line) {
  console.log(solution(Number(line)));
  // input.push(line);
}).on("close", function () {
  // solution(input);
  process.exit();
});

const solution = (input) => {
  if (input === 1) return 1;
  if (input === 0) return 0;
  return solution(input - 2) + solution(input - 1);
};

//대문자 65~90
//소문자 97~112
//26개
