/* function sayHello(word) {
  return word;
} */

/* const sayHello = (word) => {
  return word;
};

console.log(sayHello("Hello")); */

/* const sum = (a, b) => {
  console.log(b);
  return a + b;
};

console.log(sum(1, 2)); */

// Functions converted to Arrow functions
function sum(a, b) {
  return a + b;
}
let sum2 = (a, b) => {
  return a + b;
};
let sum3 = (a, b) => a + b;

function isPositive(number) {
  return number >= 0;
}

let isPositive2 = (number) => number >= 0;

function randomNumber() {
  return Math.random;
}

/* document.addEventListener("click", function () {
  console.log("Click");
}); */

console.log(isPositive2(2));
