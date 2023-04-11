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

/* TODO:
 * Tutaj powinno rozdzielac 5Moj12-13 na cos takiego:
 * lekturaNaDzis = [ 5Moj12, 5Moj13 ]
 */

lekturaNaDzis.forEach(ksiega => {
    let display = ""

    for (const [key, value] of Object.entries(biblia)) {
        let match = null
        if (key.toUpperCase() === ksiega) {
            display += `\n${key}:\n`
            value.forEach((wers, i) => {
                display += `|${i+1}| ${wers} `
            })
            display += "\n"
        } else if (match = ksiega.match(/(\w+\d+)-(\d+)/)) { // Jest cos takiego XYZ12-13
            console.log({ match, key })
            if (`${match[1]}${match[2]}`.toUpperCase() === key.toUpperCase()) {
                console.lgo(">>>>>>>>>>>>>>>")
                console.log(`${match[1]}${match[2]}`.toUpperCase())
                display += `\n${key}:\n`
                value.forEach((wers, i) => {
                    display += `|${i+1}| ${wers} `
                })
                display += "\n"
            } else if (`${match[1]}${match[3]}`.toUpperCase() === key.toUpperCase()) {
                console.lgo("<<<<<<<<<<<<<<<")
                console.log(`${match[1]}${match[3]}`.toUpperCase())
                display += `\n${key}:\n`
                value.forEach((wers, i) => {
                    display += `|${i+1}| ${wers} `
                })
                display += "\n"
            } 
        }
    }

    console.log(display)
})
