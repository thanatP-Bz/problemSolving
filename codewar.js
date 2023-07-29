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

function testEven(n) {
  //Your awesome code here!
  return n % 2 === 0 ? true : false;
}

function setAlarm(employed, vacation) {
  return employed === true && vacation === false ? true : false;
}

function between(a, b) {
  // your code here
  return;
}

function openOrSenior(data) {
  // ...
  let result = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      result.push("Senior");
    } else {
      result.push("Open");
    }
  }
  return result;
}

const reverseSeq = (n) => {
  let result = [];

  for (let i = n; i > 0; i--) {
    result.push(i);
  }
  return result;
};

let a1 = ["a", "b", "c", "c"];
let b2 = ["a", "b", "c", "c"];

const checkEx = (a1, a2) => {
  let pts = 0;

  for (let i = 0; i < a1.length; i++) {
    if (a1[i] === a2[i]) {
      pts += 4;
    }

    if (a1[i] !== a2[i] && a2[i] !== "") {
      pts -= 1;
    }
  }
  return pts < 0 ? 0 : pts;

  /* a1.forEach((e1) =>
    a2.forEach((e2) => {
      e1 === e2 ? (pts += 4) : e1 !== e2 && e2 !== "" ? (pts -= 1) : 0;
    })
  );

  return a2 < 0 ? 0 : pts; */
};

const xor = (a, b) => (a === b ? false : a || b ? true : false);

const removSmall = (n) => {
  let min = Math.min(...n);
  return n.filter((e) => e !== min);
};

const rev = (num) => num.reverse();

const consec = [1, 2, 3, 4, 5, 6];

const checkConsecNum = (num) => {
  for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
  }
};

const hello = (name) => {
  return `Hello, ${
    name ? name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() : "World"
  }!`;
};

/* const strays = (numbers) => {
  const result = numbers.find((number) => numbers.indexOf(number));
  return result;
};
console.log(strays([3, 4, 7, 9, 10]));

const strayNum = [2, 4, 6, 7, 8];
 */

//find will return the first element of the array if they found it otherwise returns undefined
/* const straysNumber = (number) => {
  return number.find((num) => number.indexOf(num));
};

console.log(straysNumber(numArr));
*/
/* let numArr = [1, 2, 3, 6, 4, 5];

const checkConsec = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] != arr[i] + 1) {
      return arr[i + 1];
    }
    return null;
  }
};

console.log(checkConsec(numArr));
 */

/* const str = "sumo";

const munbling = (s) => {
  return s.split("").map((c, i) => c.repeat(i));
};

console.log(munbling(str)); */

let numArr = [1, 2, 3, 6, 4, 5];

const findNum = (num) => {
  return num.find((n) => num.indexOf(n) === num.lastIndexOf(n));
};

console.log(findNum(numArr));
