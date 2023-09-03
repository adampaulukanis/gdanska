"use strict"

const { describe, it } = require("node:test");
const assert = require("node:assert").strict;
const Parser = require("./parser");

describe("Mój parser", () => {
    let db = {};

    /*
    it("test1", () => {
        let p = new Parser("haha-kaszanka");
        p.init("siemanko");
    */
    /*
        assert.deepEqual(
            Parser('test1'),
            null);
    });
    */
    it("1Moj1",  () => {
        db["1Moj1"] = [ "1Moj1" ];
        db["xfilez"] = [ "Kaszanka PL" ]; // TODO: Potrzebne mi to? `M
        assert.deepEqual(Parser("1Moj1"), db);
        delete db["1Moj1"];
        // nie trzeba usuwac xfilez
    })

    it("ŁUK17, (unicode)", () => {
        // db xfilez implicite zadeklarowane
        db["ŁUK17"] = [ "ąćęłńóśżź" ]; // TODO: How to make sure this is in UNICODE?
        assert.deepEqual(Parser("ŁUK17"), db);
        assert.deepEqual(Parser("ŁUK17")["ŁUK17"][0][4] === "ń", true);
        delete db["ŁUK17"];
    })

    /*
     * Nie jestem jeszcze gotowy na zmienna *wiecej*
    it("Joz12-15", () => {
        assert.deepEqual(Parser("Joz12-15"), [ "Joz12", "Joz13", "Joz14", "Joz15" ]);
    })

    describe("For debug", () => {
        it("Adam1", () => { assert.deepEqual(Parser("Adam1"), [ "Adam1" ]); })
        it("Adam12", () => { assert.deepEqual(Parser("Adam12"), [ "Adam12" ]); })
        it("1Adam12", () => { assert.deepEqual(Parser("1Adam12"), [ "1Adam12" ]); })
    })
    */
})
