const sumNumbersArray = require("./sumNumbersArray");

test("Sum Positive Numbers in the Array",
() => {
    expect(sumNumbersArray([1,2,3])).toEqual(6);
});

test("Sum Positive and Negative Numbers in the Array",
() => {
    expect(sumNumbersArray([1,-2,3,6])).toEqual(8);
});

test("Sum Negative Numbers in the Array Only",
() => {
    expect(sumNumbersArray([-1,-2,-3])).toEqual(-6);
});

test("Error if Strings Are Included",
() => {
    expect(sumNumbersArray([1,"Ben","Charles"])).toContain("Charles");
});