const array1 = [
  "sheep",
  "sheep",
  "sheep",
  "sheep",
  "sheep",
  "wolf",
  "sheep",
  "sheep",
];

/* const warnTheSheep = (arr) => {
  for (let i = arr.length - 1; i >= 1; i--) {
    console.log(arr.indexOf(arr));
  }
};

warnTheSheep(array1);
 */

/* function expressionMatter(a, b, c) {
  var r = Math.max(
    a + b + c,
    a * b * c,
    a * b + c,
    a * (b + c),
    a + b * c,
    (a + b) * c
  );

  return r;
}

console.log(expressionMatter(1, 2, 3)); */

/* const num = [0, 1, 2, 3, 5, 8, 13];

const take = (arr, n) => {
  return arr.slice(0, n);
};

console.log(take(num, 4)); */

/* function sum(numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum([]));
 */

/* function solve(s) {
  //..
  
  
}

console.log(solve("ERnd")); */

/* n = 1 2 3  */
/* const capital = (word) => {
  const w = word.split("");

  const output = [];
  for (i = 0; i < w.length; i++) {
    if (w[i] === w[i].toUpperCase()) {
      output.push(i);
    }
  }
  return output;
};

console.log(capital("tDsT"));
 */
/* loop trough array
check if a[i] + 1 =  */

/* const num = [0, 1, 2, 3, 5, 8, 13];

function removeEveryOther(arr) {

  return arr.filter((_, index) => index % 2 === 0);
}

console.log(removeEveryOther(num));
 */

/* function strCount(str, letter) {
  //code here
  let sum = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      sum.push(i);
    }
  }
  return sum.length;
}

console.log(strCount("gagaseseaggg", "g")); */

/*
has to have an empty array

check interger and limit 

reduce => a + b = limit ? return limit 

*/
/* function findMultiples(integer, limit) {
  //your code here
  const a = [];
  let int = 1;

  while (int * integer <= limit) {
    a.push(int * integer);
    int++;
  }
  return a;
}

console.log(findMultiples(5, 35)); */

/* function feast(beast, dish) {
  //your function here
  const b = beast.split("");
  const d = dish.split("");

  return b[0] === d[0] && b[b.length - 1] === d[d.length - 1];
}

console.log(feast("rtem galic", "rgalic")); */
/* function getRealFloor(n) {
  return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
}

console.log(getRealFloor(14));
 */
function remove(string) {
  let str = string.split("");

  return str;
  /* 
  if (str[str.length - 1] === "!") {
    return str.pop();
  } */
}

/* function howMuchILoveYou(nbPetals) {
  // your code
  let arr = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];
  for (let i = 0; i <= nbPetals; i++) {
    arr.push(arr[i]);
  }
  return arr[nbPetals - 1];
} */

/* function between(a, b) {
  // your code here
  const arr = [];

  for (let i = a; i <= b; i++) {
    arr.push(i);
  }

  return arr;
}

console.log(between(-2, 4));
/* 70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60 */
/* 
function getGrade(s1, s2, s3) {
  // Code here
  let num = [s1, s2, s3];

  const avg = num.reduce((a, b) => a + b) / num.length;

  if (avg >= 90) {
    return "A";
  } else if (avg >= 80) {
    return "B";
  } else if (avg >= 70) {
    return "C";
  } else if (avg >= 60) {
    return "D";
  } else {
    return "F";
  }
}
console.log(getGrade(70, 70, 70)); */

/* function multiTable(number) {
  // good luck
} */
