#!/usr/bin/env node

"use strict";

const biblia = require("./biblia");
const MM_DD = require('./get-MM-DD/get-date.js');
let lekturaNaDzis = require("./kalendarium")[MM_DD()];
const Parser = require("parser");
const Skroty = require("./skroty.json");

function getSkrot(tytul) {
    return tytul.split(/([0-9]*[a-zA-Z]+)/u)[1];
}

for (const rozdzial of lekturaNaDzis) {
    for (const tytul of Parser(rozdzial)) {
        let fajnaNazwa = getSkrot(tytul)
        console.log(fajnaNazwa);
        console.log("--------------------------");
        console.log(`${tytul} [${rozdzial}] ${Skroty[fajnaNazwa]}`);
        console.log("--------------------------");

        const wersy = biblia[tytul] || [ "error", tytul, "niedostępna w biblia.json" ];

        wersy.forEach((wers, i) => {
            console.log(++i, wers);
        });
    }
}
