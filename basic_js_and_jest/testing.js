// const list = [4, 6, 63, 5, 134];

// const lowOne = list.sort((a, b) => a - b);
// console.log(lowOne);
// const highOne = list.sort((a, b) => b - a);

// console.log(highOne);

// console.log(list);

const str = "123567";
let newStr = "";
for (let index = 0; index < str.length; index++) {
  if (str[index] < 5) {
    newStr = newStr + 0;
  } else {
    newStr = newStr + 1;
  }
}

console.log(newStr);
