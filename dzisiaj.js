#!/usr/bin/env node

"use strict";

const biblia = require("./biblia");
const Today = require('./get-today-date/get-date.js');
let lekturaNaDzis = require("./kalendarium")[Today()];
const Parser = require("./parser/parser.js");

for (const rozdzial of lekturaNaDzis) {
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
