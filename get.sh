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
    return tytul.split(/([0-9]*[a-zA-Z]+)/u)[1];
}
function getRozdzial(tytul) {
    // 1Kor11 => 11 is interesting
    return tytul.split(/([0-9]+)$/)[1];
}
let fajnaNazwa = getSkrot(TOCHCE);
console.log(TOCHCE, Skroty[fajnaNazwa], getRozdzial(TOCHCE));

let counter = 0;

for (let wers of biblia[TOCHCE]) {
    console.log(++counter, wers);
}
