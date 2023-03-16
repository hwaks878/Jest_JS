let middle = [3, 4, 9];
let arr = [1, 2, middle, 5, 6];

console.log(arr);
// [1, 2, [3, 4, 9], 5, 6];

// Using spread operation ; three dots
// the spread operator allows the elements of our array to expand.
// The spread operator allows an expression to be expanded in places where multiple elements/variables/arguments are expected.

let arr2 = [1, 2, ...middle, 5, 6];
console.log(arr2);
// [1, 2, 3, 4, 9, 5, 6];
