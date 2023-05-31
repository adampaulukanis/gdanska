"use strict"

const { describe, it } = require("node:test");
const assert = require("node:assert").strict;
const Parser = require("./parser");

describe("Mój parser", () => {
    it("1Moj1 OK",  () => {
        assert.deepEqual(Parser("1Moj1"), [ "1Moj1" ]);
    })

    it("ŁUK17 OK, (unicode)", () => {
        assert.deepEqual(Parser("ŁUK17"), [ "ŁUK17" ]);
    })

    it("Joz12-15 OK", () => {
        assert.deepEqual(Parser("Joz12-15"), [ "Joz12", "Joz13", "Joz14", "Joz15" ]);
    })
})
