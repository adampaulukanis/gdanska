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
function Parser(string, debug = false){
    let re = /^([\p{L}\p{N}]+)(-\d+)*(,\d+)*(-\d+)*/gu;
    let [ _, rozdzial, rozdzialDo, wers, wersDo ] = re.exec(string);

    let rozdzialy = [ rozdzial ];

    if (rozdzialDo) {
        let nazwa = rozdzial.replace(/\d+$/, "");
        let od = rozdzial.match(/\d+$/)[0];
        for (let i = Number(od) + 1; i <= Number(rozdzialDo.replace("-", "")); i++) {
            rozdzialy.push(`${nazwa}${i}`);
        }
    }
    let wersy = [];

    if (wers) {
        wers = wers.replace(",", "");
        wersy.push(wers);
    }

    if (debug)
        console.log({ debug, _, rozdzial, rozdzialDo, wers, wersDo, rozdzialy });

    return {
        _,
        rozdzialy,
        wersy,
    };
}

export default Parser;
