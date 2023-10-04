#!/usr/bin/env node

"use strict";

const TOCHCE = process.argv[2];

if (TOCHCE === undefined) {
    console.log("USAGE: get.sh Jan1[:1[-7]]");
    process.exit(1);
}

const biblia = require("./biblia.json");
let counter = 0;

for (let wers of biblia[TOCHCE]) {
    console.log(++counter, wers);
}
