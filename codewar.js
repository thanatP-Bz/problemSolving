//get Positive number
let arr1 = [-1, 2, 3, 4, -5];
function positiveSum(arr) {
  return arr.filter((val) => val > 0).reduce((acc, curr) => acc + curr, 0);
}

function solution(str, ending) {
  // TODO: complete
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < ending.length; j++) {}
  }
}
solution("abc", "abd");

let number = [-52, 56, 30, 29, -54, 0, -110];

//min max
var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

let score = [
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

function points(games) {
  return games.reduce(
    (acc, curr) =>
      (acc +=
        curr[0] > curr[2]
          ? 3
          : curr[0] < curr[2]
          ? 0
          : (curr[0] = curr[2] ? 1 : 0)),
    0
  );
}

function accum(s) {
  // your code
  str = s.split("").join("-");

  return str;
}

let checkNum = [1, 2, 4, 5];
function check(a, x) {
  return a.includes(x);
}

let btn = document.getElementById("btn");

let p1Score = [4, 2, 5, 4, 5, 6, "4", "5"];
let p2Score = [1, 5, 3, 1, 7, 2];

let p1 = 0;
let p2 = 0;

for (let i = 0; i < p1Score.length; i++) {
  if (p1Score[i] > p2Score[i]) {
    p1++;
  }
  if (p1Score[i] < p2Score[i]) {
    p2++;
  }
}

/* var results = {
  Alice: 0,
  Bob: 0,
}; */
//sum of array string
/* let getNum = arrNum.map((n) => parseInt(n)).reduce((a, b) => a + b); */

/* 
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(Boolean).length;
}
 */

function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}

console.log(validatePIN("1234"));

let test = "";
console.log(test.length);
