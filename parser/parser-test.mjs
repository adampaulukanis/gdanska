"use strict";

import { describe, it } from "node:test";
import { strict as assert } from "node:assert";
import Parser from "./parser.mjs";

describe("Mój parser", () => {
    it("2Tym", () => {
        assert.ok(Parser("2Tym").ksiega === "2Tym", "ksiega !== 2Tym");
        assert.ok(Parser("2Tym").rozdzial === "", "rozdzial !== ''");
        assert.ok(Parser("2Tym").wers === "", "wers !== ''");
    });

    it("1Moj1 OK",  () => {
        assert.ok(Parser("1Moj1").ksiega === "1Moj", "ksiega !== 1Moj");
        assert.ok(Parser("1Moj1").rozdzial === "1");
        assert.ok(Parser("1Moj1").wers === "", "wers !== ''");
    })

    it("2Moj2,3 ok", {skip: true}, () => {
        assert.ok(Parser("2Moj2,3").ksiega === "2Moj");
        assert.ok(Parser("2Moj2,3").rozdzial === "2");
        assert.ok(Parser("2Moj2,3").wers === "3");
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
