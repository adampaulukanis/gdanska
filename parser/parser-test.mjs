"use strict";

import { describe, it } from "node:test";
import { strict as assert } from "node:assert";
import Parser from "./parser.mjs";

describe("Mój parser", () => {
    it("2Tym", () => {
        const obj = {
            _: "2Tym",
            ksiega: "2Tym",
            rozdzial: "",
            wers: ""
        };
        assert.deepEqual(Parser("2Tym"), obj);
    });

    it("1Moj1 OK",  () => {
        const obj = {
            _: "1Moj1",
            ksiega: "1Moj",
            rozdzial: "1",
            wers: ""
        };
        assert.deepEqual(Parser("1Moj1"), obj);
    })

    it("2Moj2,3 ok", () => {
    });

    it("Łuk17", {skip: true });
    it("Łuk13,5", {skip: true });
    it("Łuk12,5-9", {skip: true });
    it("Ps1", {skip: true });
    it("Ps101", {skip: true });
    it("Ps111,7", {skip: true });
    it("Joz12", {skip: true });
    it("Joz12-15", {skip: true });
    it("1Kor1", {skip: true });
    it("1Kor2,3", {skip: true });
    it("2Kor3,5-7", {skip: true });
})
