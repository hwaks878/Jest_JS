const moreThan = require("./filter");
const arrayItems = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 4 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];
const successResults = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
];
const failResults = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Keyboard", price: 25 },
  { name: "Album", price: 10 },
];

test("Price is Greater Than or Equal to 100", () => {
  expect(moreThan(arrayItems)).toEqual(successResults);
});
test("Not All Prices are Greater Than or Equal to 100", () => {
  expect(moreThan(arrayItems)).not.toEqual(failResults);
});
test("Original Array Has Not Changed", () => {
  expect(arrayItems).toEqual(arrayItems);
});
