const taxCalc = require("./taxCalc");

test("Calculate Total Sales with Tax : Whole Number",
() => {
    expect(taxCalc(10,0.0775)).toBe(0.775);
}

);

test("Calculate Total Sales with Tax : Float Number",
() => {
    expect(taxCalc(10.10,0.0775)).toBe(0.78275);
}

);