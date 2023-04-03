#!/usr/bin/env node

'use strict'

let lektura = []

for (let i = 2; process.argv[i] != undefined; i++) {
    lektura.push(process.argv[i])
}

const biblia = require('./biblia')

const now = new Date()
const today = [
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
].join("-")

let lekturaNaDzis = lektura.length ? lektura : require('./kalendarium')[today]
lekturaNaDzis = lekturaNaDzis.map(l => l.toUpperCase())

lekturaNaDzis.forEach(ksiega => {
    let display = ""

    for (const [key, value] of Object.entries(biblia)) {
        if (key.toUpperCase() === ksiega) {
            console.log(`\n${key}:\n`);
            value.forEach((wers, i) => {
                display += `|${i+1}| ${wers} `
            })
        } else if (ksiega.split("-")[0] === key.toUpperCase()) { // pierwsza księga
            console.log(ksiega.split("-"))
            console.log(`\n${key}:\n`);
            value.forEach((wers, i) => {
                display += `|${i+1}| ${wers} `
            })
        }
    }

    console.log(display)
})
