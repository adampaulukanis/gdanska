#!/usr/bin/env node

"use strict";

let lektura = [];

for (let i = 2; process.argv[i] != undefined; i++) {
    lektura.push(process.argv[i]);
}

const biblia = require("./biblia");

const now = new Date();
const today = [
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
].join("-");

let lekturaNaDzis = lektura.length ? lektura : require("./kalendarium")[today];

/* TODO:
 * Tutaj powinno rozdzielac 5Moj12-13 na cos takiego:
 * lekturaNaDzis = [ 5Moj12, 5Moj13 ]
 */

const Parser = require("./parser/parser.js");
for (const rozdzial of lekturaNaDzis) {
    for (const czytaj of Parser(rozdzial)) {
        console.log("--------------------------");
        console.log(czytaj);
        console.log("--------------------------");
        console.log(biblia[czytaj])
    }
}

return
//////////////////////////////////////////

lekturaNaDzis.forEach(ksiega => {
    let display = ""

    for (const [key, value] of Object.entries(biblia)) {
        let match = null
        if (key.toUpperCase() === ksiega) {
            display += `\n${key}:\n`
            value.forEach((wers, i) => {
                display += `|${i+1}| ${wers}\n`
            })
            display += "\n"
        }
    }

    console.log(display)
})
