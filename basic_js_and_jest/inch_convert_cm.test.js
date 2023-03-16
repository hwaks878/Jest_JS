const inchToCm = require("./inch_convert_cm");


test("Convert Inches to Centimeters",
() => {
    expect(inchToCm(10)).toBe(25.4);
}
);