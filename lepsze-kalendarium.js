'use strict';

const Parser = require("parser");
const kalendarium = Object.entries(require('./kalendarium.json'));

for (let [dzien, rozdzialy] of kalendarium) {
    let linia = [];
    rozdzialy.forEach(r => {
        linia.push(Parser(r));
    });
    console.log('"' + dzien + '"', ':', linia.flat());
}
