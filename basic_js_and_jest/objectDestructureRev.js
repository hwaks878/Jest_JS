const bob = {
  first: "bob",
  last: "sanders",
  city: "chicago",
  siblings: {
    sister: "jane",
  },
};

function printPerson({ first, last, city, siblings: { sister } }) {
  console.log(first, last, city, sister);
}

printPerson(bob); // bob sanders chicago jane
