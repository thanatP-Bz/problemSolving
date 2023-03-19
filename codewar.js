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

let test = "";

let mid = "test";

const getMiddle = function (s) {
  let str = s.split("");
  return str;
};

const maltiple = (a, b) => {
  return a + b;
};

function oddOrEven(arr) {
  if (arr.length === 0) {
    return "even";
  }

  let sum = arr.reduce((a, b) => a + b);
  return sum % 2 === 0 ? "even" : "odd";
}

function friend(friends) {
  //your code here
  return friends.filter((f) => f.length === 4);
}

console.log(friend(["Love", "Your", "Face", "1"]));

function sortArray(array) {
  // Return a sorted array.
  let odd = array.filter((odd) => odd % 2).sort((a, b) => a - b);

  return array.map((x) => (x % 2 ? odd.shift() : x));
}

const testShift = (array) => {
  let odd = array.filter((odd) => odd % 2 === 0).sort((a, b) => a - b);
  return array.map((x) => (x % 2 ? x : odd.shift()));
};

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  return mpg * fuelLeft >= distanceToPump;
};

function repeatStr(n, s) {
  let char = "";

  for (let i = 1; i <= n; i++) {
    char += s;
  }

  return char;
}

function boolToWord(bool) {
  //...
  return bool ? true : false;
}

function sumTwoSmallestNumbers(numbers) {
  //Code here
  return numbers
    .sort((a, b) => a - b)
    .slice(0, 2)
    .reduce((a, b) => a + b);
}

console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]));

function testEven(n) {
  //Your awesome code here!
  return n % 2 === 0 ? true : false;
}

function setAlarm(employed, vacation) {
  return employed === true && vacation === false ? true : false;
}

console.log(setAlarm(false, true));
