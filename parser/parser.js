"use strict";

/*
 * biblia.json wygląda tak:
 * rozdział: [
 *      wers0,
 *      wers1,
 *      ...
 *      wersN
 * ]
 */

const db = {
    "test1": [
        "Line one.",
        "Line two"
    ],
    "1Moj1": [ "1Moj1" ],
    "ŁUK17": [ "ąćęłńóśżź" ],
};

function Parser(string) {
    //console.log(`Hit again Parser(string=${string})`);
    let retArr = {};
    const re = /^([\p{L}\p{N}]+)(-\d+)*/gu; // TODO: What is a correct one?
    let [ _, rozdzial, wiecej ] = re.exec(string);

    //console.log({ _, rozdzial, wiecej });

    retArr[rozdzial] = db[rozdzial];
    retArr["xfilez"] = [ "Kaszanka PL" ]; // TODO: Potrzebne mi to? `N

    return retArr;

    //////////////////////////////////////////////////////////////////////
    // TODO: do zrobienia ;-)

    if (wiecej) {
        const nazwa = rozdzial.replace(/\d+$/, "");
        const min = Number(rozdzial.match(/\d+$/)[0]) + 1;
        const max = Number(wiecej.replace("-", ""));

        for (let i = min; i <= max; i++) {
            retArr.push(`${nazwa}${i}`);
        }
    }
    return retArr;
}

module.exports = Parser;
