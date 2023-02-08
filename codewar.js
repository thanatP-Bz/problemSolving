//get Positive number
let arr = [-1, 2, 3, 4, -5];
function positiveSum(arr) {
  return arr.filter((val) => val > 0).reduce((acc, curr) => acc + curr, 0);
}

function solution(str, ending) {
  // TODO: complete
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < ending.length; j++) {}

    console.log(str[i] == ending[i]);
  }
}
solution("abc", "abd");

let num1 = [-52, 56, 30, 29, -54, 0, -110];

//min max
var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

console.log(min(num1));
console.log(max(num1));

let scores = [
  "1:0",
  "2:0",
  "3:0",
  "4:0",
  "2:1",
  "3:1",
  "4:1",
  "3:2",
  "4:2",
  "4:3",
];

let test = scores.spilt("");

console.log(test);

function points(games) {
  let sum = 0;

  games.map((x) => console.log(+x));
}

p;
