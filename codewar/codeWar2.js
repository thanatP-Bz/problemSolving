/* const array1 = [
  "sheep",
  "sheep",
  "sheep",
  "sheep",
  "sheep",
  "wolf",
  "sheep",
  "sheep",
]; */

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

/* function calculateAge(y, c) {
  if (y < c) {
    let n = c - y;
    if (n === 1) {
      return "You are 1 year old.";
    }
    return `You are ${n} years old.`;
  }
  if (y > c) {
    let n = y - c;
    if (n === 1) {
      return "You will be born in 1 year.";
    }
    return `You will be born in ${n} years.`;
  } else {
    return "You were born this very year!";
  }
}

console.log(calculateAge(1993, 1992)); */

/* const arr1 = [1, 3, 6, 4];

const twoSum = (arr, goal) => {
  const index = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === goal) {
        index.push(i);
        index.push(j);
      }
    }
    return index;
  }
};

console.log(twoSum(arr1, 5));
 */
/* 
function countBy(x, n) {
  var z = [];
  for (let i = 1; i <= n; i++) {
    z.push(i * x);
  }
  return z;
}
 */
/* const getMiddle = (s) => {
  return s.length % 2 === 0
    ? s.slice(s.length / 2 - 1, s.length / 2 + 1)
    : s[Math.floor(s.length / 2)];
};

console.log(getMiddle("testmt")); */

/*  */

/* function finalGrade(exam, projects) {
  // final grade
  if (exam > 90 || projects > 10) {
    return 100;
  } else if (exam > 75 && projects >= 5) {
    return 90;
  } else if (exam > 50 && projects >= 2) {
    return 75;
  }
  return 0;
}

console.log(finalGrade(75, 5)); */

/* function incrementArray(number) {
  const result = [];

  // Iterate over the array
  for (let i = number[0]; i <= number[number.length - 1]; i++) {
    // Push the current element + 1 to the result array
    result.push(i);
  }

  return result;
}

console.log(incrementArray([1, 3, 6])); */
/* function mergeArrays(arr1, arr2) {
  let joinArr = arr1.concat(arr2);
  joinArr = new Set(joinArr);
  joinArr = Array.from(joinArr);
  return joinArr.sort((n1, n2) => n1 - n2);
} */

/* function reverseLetter(str) {
  //coding and coding..
  if (str.length === 0) {
    return str;
  } else {
    let nonAlphabet = str.replace(/[^a-z]/gi, "");
    return nonAlphabet.split("").reverse().join("");
  }
}

console.log(reverseLetter("")); */

/* function sayHello(name, city, state) {
  return `Hello, ${name.join(" ")} ! Welcome to ${city}, ${state}!`;
}

console.log(sayHello(["thanat", "Benz"], "SP", "MD"));
 */
/* function printerError(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] > "m") {
      count++;
    }
  }
  return count + "/" + str.length;
} */

/* function distinct(a) {
  return Array.from(new Set(a));
}
 */

/* function lovefunc(flower1, flower2) {
  // moment of truth
  return (
    (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
    (flower1 % 2 !== 0 && flower2 % 2 === 0)
  );
}

console.log(lovefunc(110, 456)); */

/* function smallEnough(a, limit) {
  for (let i = 0; i < a.length; i++) {
    return a[i] <= limit;
  }
}
console.log(smallEnough([4, 6, 8], 10));

const smallMap = (a, limit) => a.every((n) => n <= limit);

console.log(smallMap([4, 6, 8], 10));
 */

/* const minValue = (values) =>
  parseInt([...new Set(values)].sort((a, b) => a - b).join(""));

console.log(minValue([1, 3, 1])); */


