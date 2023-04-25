"use strict";

import { describe, it } from "node:test";
import { strict as assert } from "node:assert";
import Parser from "./parser.mjs";

describe("Mój parser", () => {
    it("1Moj1 OK",  () => {
        const obj = {
            _: "1Moj1",
            rozdzialy: [ "1Moj1" ],
            wersy: [],
        };
        assert.deepEqual(Parser("1Moj1"), obj);
    })

    it("2Moj2,3 OK", () => {
        const obj = {
            _: "2Moj2,3",
            rozdzialy: [ "2Moj2" ],
            wersy: [ "3" ],
        };
        assert.deepEqual(Parser("2Moj2,3"), obj);
    });

    it("ŁUK17 OK", () => {
        const obj = {
            _: "ŁUK17",
            rozdzialy: [ "ŁUK17" ],
            wersy: [],
        };
        assert.deepEqual(Parser("ŁUK17"), obj);
    });

    it("Łuk13,5", () => {
        const obj = {
            _: "Łuk13,5",
            rozdzialy: [ "Łuk13" ],
            wersy: [ "5" ],
        };
        assert.deepEqual(Parser("Łuk13,5"), obj);
    });

    it("Joz12-15 OK", () => {
        const obj = {
            _: "Joz12-15",
            rozdzialy: [ "Joz12", "Joz13", "Joz14", "Joz15" ],
            wersy: [],
        };
        assert.deepEqual(Parser("Joz12-15"), obj);
    });

    it("Łuk12,5-9", { skip: true }, () => {
        const obj = {
            _: "Łuk12,5-9",
            rozdzialy: [ "Łuk12" ],
            wersy: [ 5, 6, 7, 8, 9 ],
        };
        assert.deepEqual(Parser("Łuk12,5-9", true), obj);

    });
    it("2Kor3,5-7", {skip: true });
})
