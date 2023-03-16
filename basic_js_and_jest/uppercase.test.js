const upper = require("./uppercase")


test("Convert lowercase string to Upper Case",
() => {
    expect(upper("andy")).toBe("ANDY");
}
);

test("Convert lowercase string to Upper Case",
() => {
    expect(upper("Andy")).toBe("ANDY");
}
);

test("Convert lowercase string to Upper Case",
() => {
    expect(upper("_andy")).toBe("_ANDY");
}
);

test("Convert lowercase string to Upper Case",
() => {
    expect(upper("anDy")).toBe("ANDY");
}
);
