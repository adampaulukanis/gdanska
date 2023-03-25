#!/usr/bin/env node

'use strict'

const lektura = require('./lektura')
const biblia = require('./biblia')

const today = new Date()
const dd = String(today.getDate()).padStart(2, "0")
const mm = String(today.getMonth() + 1).padStart(2, "0")

const lekturaNaDzis = lektura[`${mm}-${dd}`]

console.log("-------------------------------")
console.log("Dzisiaj do przeczytania mam:")
console.log(lekturaNaDzis)
console.log("-------------------------------")

lekturaNaDzis?.forEach(ksiega => {
    console.log(ksiega)
    biblia[ksiega]?.forEach((wers, i) => {
        console.log((i+1), wers)
    })
    console.log("-------------------------------")
})
