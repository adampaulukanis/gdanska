"use strict";

const Biblia = require("./biblia.json");

Object.keys(Biblia).forEach(key => {
    console.log(key, Biblia[key].length);
});
