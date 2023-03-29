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

const lekturaNaDzis = lektura.length ? lektura : require('./kalendarium')[today]

console.log("-------------------------------")
console.log("Dzisiaj do przeczytania mam:")
console.log(lekturaNaDzis)
console.log("-------------------------------")

lekturaNaDzis?.forEach(ksiega => {
    console.log(ksiega)
    let display = ""
    biblia[ksiega]?.forEach((wers, i) => {
        display += `|${i+1}| ${wers} `
    })
    console.log(display)
    console.log("-------------------------------")
})
