const repeatElementArray = require("./repeatElementArray");

test("Repeat Each Element In Array Twice",
() => {
    let listArray = ["bark","meow","neigh"];
    expect(repeatElementArray(listArray)).toStrictEqual([ "bark", "bark", "meow", "meow", "neigh", "neigh" ]);
}

);

test("Repeat Each Element In Array Twice",
() => {
    let listArray = [2,4,6,8];
    expect(repeatElementArray(listArray)).toStrictEqual([ 2,2,4,4,6,6,8,8 ]);
}

);