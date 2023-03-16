const bob = {
  first: "bob",
  last: "sanders",
  city: "chicago",
  siblings: {
    sister: "jane",
  },
};
/*
// Using destructuring : API return data or nested data

const { first, last, city } = bob;
console.log(first, last, city); //bob sanders chicago
*/

// adding the siblings object in bob
const {
  first,
  last,
  city,
  siblings: { sister },
} = bob;
console.log(first, last, city, sister); // bob sanders chicago jane

/* 
Typical setup for Object dot property to access the object

const firstName = bob.first;
const lastName = bob.last;
const sister = bob.siblings.sister;

console.log(firstName, lastName, sister); 

*/
