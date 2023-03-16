const subtract = require("./subtract");

test("To Subtract 10-3 to be 7",
() =>{
    expect(subtract(10,3)).toBe(7);
}

);


/* Normally to test you would use something like
if(subtract(10,3) === 7){
    do something if true;
} else{
    do Error if false;
}*/