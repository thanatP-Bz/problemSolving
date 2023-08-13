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

function noBoringZeros(n) {
  let str = n.toString().split(" ");
  // your code
  for (let i = 0; i < str.length; i++) {
    if (str[str.length - 1] === "0") {
      str.pop();
    } else {
      return +str.join();
    }
  }
}
