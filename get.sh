#!/usr/bin/env node

"use strict";

const biblia = require("./biblia.json");
const TOCHCE = process.argv[2];

if (TOCHCE === undefined || biblia[TOCHCE] === undefined) {
    console.log("USAGE: get.sh Jan1");
    process.exit(1);
}

let counter = 0;

for (let wers of biblia[TOCHCE]) {
    console.log(++counter, wers);
}
