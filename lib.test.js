const {test, expect} = require("@jest/globals");
const lib = require("./lib");

test("avg([3,5,7]) should be 5", ()=> {
    expect(lib.avg([3,5,7])).toBe(5);
});

test("avg([-5,5]) should be 0", ()=>{
    expect(lib.avg([-5,5])).toBe(0);
});

test("prime(37) should be true", ()=>{
    expect(lib.prime(37)).toBe(true);
});

test("Input value 10 to prime function should expect to false", ()=>{
    expect(lib.prime(10)).toBe(false);
});

test("Input value 7 to prime function should expect to 5040", ()=>{
    expect(lib.fact(7)).toBe(5040);
});

test("fact(11) should be 39916800", ()=>{
    expect(lib.fact(11)).toBe(39916800);
});