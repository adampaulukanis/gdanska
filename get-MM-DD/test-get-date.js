const getDate = require('./get-date.js');

console.log("Starting testing....");

function test(name, condition, textFail) {
    console.log(`* Test ${name}: ${!!condition}...`);
    console.assert(condition, textFail);
    console.log("--------------------");
}

test(
    "getDate(2023-03-12) should return 03-12",
    getDate("2023-03-12") === '03-12', "getDate(2023-03-12) should return 03-12");

test("getDate(true) should return something", getDate(true), "Why returned false?");

test("getDate() should return current date. Simple regex test", /(\d+)-(\d+)/.test(getDate()));

console.log('Testing done.');
