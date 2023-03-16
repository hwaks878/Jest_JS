const clonearray = require("./clonearray")

test("Provide the Same Array",
() => {
  const array = [1,2,3];
  expect(clonearray(array)).toEqual(array);
  expect(clonearray(array)).not.toBe(array);
}

);

/* review Pass by value and Pass by reference
to understand more
*/