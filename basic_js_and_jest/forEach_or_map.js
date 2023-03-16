/* Key Takeaways
Just about anything you can do with forEach() you can do with map(), and vise versa.
map() allocates memory and stores return values. forEach() throws away return values and always returns undefined.
forEach() will allow a callback function to mutate the current array. map() will instead return a new array. 
map() is ideal for chaining other methods such as filter(), reduce()
*/

let arr = [1, 2, 3, 4];
/* let newArr = arr.forEach((num, index) => {
  return (arr[index] = num * 2);
});

console.log(arr);
console.log(newArr);
// [2, 4, 6, 8];
// undefined; */

let doubled = arr.map((num) => {
  return num * 2;
});

console.log(arr);
console.log(doubled);
// [1, 2, 3, 4];
// [2, 4, 6, 8];
