// passing by value : simple types use this string,number,boolean
// directly copies the value to the variable

let a = 10;
let b = "Hello";
let c = a;

console.log(a,b,c);

// pass by reference : arrays, objects
let d = [1,2];
// e will have the same memory address : same reference
// if you change one, it changes both variables 
// but if you create a new assignment to the variable then its reference will update to the new address
let e = d;
