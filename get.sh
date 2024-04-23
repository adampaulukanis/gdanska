#!/usr/bin/env node

"use strict";

const biblia = require("./biblia.json");
const TOCHCE = process.argv[2];
const Skroty = require("./skroty.json");

if (TOCHCE === undefined || biblia[TOCHCE] === undefined) {
    console.log("USAGE: get.sh Jan1");
    process.exit(1);
}

function getSkrot(tytul) {
    let ret = tytul.split(/([0-9]*\p{L}+)/u)[1];
    return ret;
}
function getRozdzial(tytul) {
    // 1Kor11 => 11 is interesting
    return tytul.split(/([0-9]+)$/)[1];
}
let fajnaNazwa = getSkrot(TOCHCE);
console.log("---------------");
console.log(TOCHCE, Skroty[fajnaNazwa], getRozdzial(TOCHCE));
console.log("---------------");
console.log();

let counter = 0;

for (let wers of biblia[TOCHCE]) {
    console.log(++counter, wers);
}
