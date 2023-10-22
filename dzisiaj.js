#!/usr/bin/env node

"use strict";

const biblia = require("./biblia");
const MM_DD = require('./get-MM-DD/get-date.js');
let lekturaNaDzis = require("./kalendarium")[MM_DD()];
const Parser = require("parser");

for (const rozdzial of lekturaNaDzis) {
    for (const tytul of Parser(rozdzial)) {
        console.log("--------------------------");
        console.log(`${tytul} [${rozdzial}]`);
        console.log("--------------------------");

        const wersy = biblia[tytul] || [ "error", tytul, "niedostępna w biblia.json" ];

        wersy.forEach((wers, i) => {
            console.log(++i, wers);
        });
    }
}
