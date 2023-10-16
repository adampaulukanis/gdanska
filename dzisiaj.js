#!/usr/bin/env node

"use strict";

const biblia = require("./biblia");
const MM_DD = require('./get-MM-DD/get-date.js');
let lekturaNaDzis = require("./kalendarium")[MM_DD()];
const Parser = require("parser");

for (const rozdzial of lekturaNaDzis) {
    //console.log(Parser(rozdzial));
    for (const tytul of Parser(rozdzial)) {
        if (process.stdout.isTTY) {
            console.log("--------------------------");
            console.log(tytul);
            console.log("--------------------------");

            const wersy = biblia[tytul] || [ "error", tytul, "niedostępna w biblia.json" ];

            wersy.forEach((wers, i) => {
                console.log(++i, wers);
            });
        }
        else {
            console.log(tytul, "Redirecting...");
        }
    }
}
