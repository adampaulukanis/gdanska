#!/usr/bin/env node

"use strict";

const biblia = require("./biblia");
const MM_DD = require('./get-MM-DD/get-date.js');
let lekturaNaDzis = require("./kalendarium")[MM_DD()];
const Parser = require("parser");
const Skroty = require("./skroty.json");

function getSkrot(tytul) {
    let ret = tytul.split(/([0-9]*\p{L}+)/u)[1];
    return ret;
}

function getRozdzial(tytul) {
    // 1Kor11 => 11
    return tytul.split(/([0-9]+)$/)[1];
}

for (const rozdzialy of lekturaNaDzis) {
    for (const tytul of Parser(rozdzialy)) {
        let fajnaNazwa = getSkrot(tytul); 
        console.log();
        console.log("----------------------");
        console.log(`${tytul} ${Skroty[fajnaNazwa]} ${getRozdzial(tytul)}`);        // TODO: update: 1Kor11 Pierwszy Koryntów 11
        console.log("----------------------");
        console.log();

        const wersy = biblia[tytul] || [ "error", tytul, "niedostępna w biblia.json" ];

        wersy.forEach((wers, i) => {
            console.log(++i, wers);
        });
    }
}
