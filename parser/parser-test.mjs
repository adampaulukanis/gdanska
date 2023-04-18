"use strict";

import { describe, it } from "node:test";
import { strict as assert } from "node:assert";
import Parser from "./parser.mjs";

describe("Mój parser", () => {
    it("1Moj1 OK",  () => {
        const obj = {
            _: "1Moj1",
            rozdzial: "1Moj1",
            wers: undefined,
        };
        assert.deepEqual(Parser("1Moj1"), obj);
    })

    it("2Moj2,3 OK", () => {
        const obj = {
            _: "2Moj2,3",
            rozdzial: "2Moj2",
            wers: "3",
        };
        assert.deepEqual(Parser("2Moj2,3"), obj);
    });

    it("ŁUK17 OK", () => {
        const obj = {
            _: "ŁUK17",
            rozdzial: "ŁUK17",
            wers: undefined,
        };
        assert.deepEqual(Parser("ŁUK17"), obj);
    });
    it("Łuk13,5", () => {
        const obj = {
            _: "Łuk13,5",
            rozdzial: "Łuk13",
            wers: "5",
        };
        assert.deepEqual(Parser("Łuk13,5"), obj);
    });
    it("Łuk12,5-9", {skip: true });
    it("Joz12-15", {skip: true });
    it("1Kor1", {skip: true });
    it("1Kor2,3", {skip: true });
    it("2Kor3,5-7", {skip: true });
})
