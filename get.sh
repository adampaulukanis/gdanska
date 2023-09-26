#!/usr/bin/env node

"use strict";

const KSIEGA = process.argv[2];
//console.log(KSIEGA);

if (KSIEGA === undefined) {
    console.log("USAGE: get.sh Jn1");
    process.exit(1);
}

const biblia = require("./biblia.json");
let counter = 0;

for (let wers of biblia[KSIEGA]) {
    console.log(++counter, wers);
}
