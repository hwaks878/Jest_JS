//Input: [[18,20],[45,2],[61,12],[37,6],[21,21],[78,9]]
// Output : ["Open","Open","Senior","Open","Open","Senior"]
// Problem : Senior is at least 55 years old and have a have a handicap greater than 7

const seniorList = require("./multi_array_map_func");
// const seniorListChg = require("./multi_array_map_func");
const inArray = [
  [18, 20],
  [45, 2],
  [61, 12],
  [37, 6],
  [21, 21],
  [78, 9],
];

const results = ["Open", "Open", "Senior", "Open", "Open", "Senior"];

test("Senior of 55 and handicap of 7", () => {
  expect(seniorList(inArray)).toEqual(results);
});

/* test("Senior of 55 and handicap of 7", () => {
  expect(seniorListChg(inArray)).toEqual(results);
}); */
