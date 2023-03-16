const upperInArray = require("./uppercaseInArray");


test("Convert to Uppercase with an Array",
() => {
    let listArray = ["andy","ben","charlie"];
    expect(upperInArray(listArray)).toStrictEqual([ "ANDY", "BEN", "CHARLIE" ]);
}

);

test("Convert to Uppercase with an Array",
() => {
    let listArray = ["aNdy","beN","chaRlIe"];
    expect(upperInArray(listArray)).toStrictEqual([ "ANDY", "BEN", "CHARLIE" ]);
}

);