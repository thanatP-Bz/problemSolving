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
const capital = (w) => {
  const output = [];
  for (i = 0; i < w.length; i++) {
    if (w[i] === w[i].toUpperCase()) {
      console.log("yes cap");
    } else {
      console.log("no capital");
    }
  }
};

capital("tesT");
